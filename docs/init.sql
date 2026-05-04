-- Script de creación de base de datos para el Sistema de Gestión de Prácticas y Tesis - UNT

-- Extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tipos ENUM para estados y roles
CREATE TYPE rol_usuario AS ENUM ('ADMIN', 'COORDINADOR', 'ASESOR', 'ESTUDIANTE', 'EMPRESA');
CREATE TYPE estado_practica AS ENUM ('PENDIENTE', 'EN_CURSO', 'FINALIZADA', 'REPROBADA');
CREATE TYPE estado_tesis AS ENUM ('PROYECTO', 'EJECUCION', 'SUSTENTACION', 'APROBADA');
CREATE TYPE tipo_informe AS ENUM ('PRACTICA', 'TESIS_AVANCE', 'TESIS_FINAL');

-- Tabla de Usuarios
CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol rol_usuario NOT NULL,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Estudiantes
CREATE TABLE estudiantes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    facultad VARCHAR(100) NOT NULL,
    escuela VARCHAR(100) NOT NULL,
    ciclo INTEGER,
    CONSTRAINT fk_estudiante_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla de Docentes/Asesores
CREATE TABLE docentes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    especialidad VARCHAR(150),
    departamento VARCHAR(100),
    grado_academico VARCHAR(50)
);

-- Tabla de Empresas
CREATE TABLE empresas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(200) NOT NULL,
    ruc VARCHAR(11) UNIQUE NOT NULL,
    direccion TEXT,
    representante VARCHAR(100),
    convenio_activo BOOLEAN DEFAULT FALSE,
    fecha_convenio DATE
);

-- Tabla de Prácticas Preprofesionales
CREATE TABLE practicas_preprofesionales (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    estudiante_id UUID NOT NULL REFERENCES estudiantes(id),
    empresa_id UUID NOT NULL REFERENCES empresas(id),
    asesor_id UUID REFERENCES docentes(id),
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    estado estado_practica DEFAULT 'PENDIENTE',
    horas_acumuladas INTEGER DEFAULT 0,
    calificacion_final DECIMAL(4,2),
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Tesis
CREATE TABLE tesis (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    estudiante_id UUID NOT NULL REFERENCES estudiantes(id),
    asesor_id UUID REFERENCES docentes(id),
    titulo VARCHAR(500) NOT NULL,
    descripcion TEXT,
    estado estado_tesis DEFAULT 'PROYECTO',
    fecha_registro DATE DEFAULT CURRENT_DATE,
    fecha_sustentacion TIMESTAMP WITH TIME ZONE,
    nota_final DECIMAL(4,2)
);

-- Tabla Relacional Jurados de Tesis
CREATE TABLE jurados_tesis (
    tesis_id UUID NOT NULL REFERENCES tesis(id) ON DELETE CASCADE,
    docente_id UUID NOT NULL REFERENCES docentes(id),
    PRIMARY KEY (tesis_id, docente_id)
);

-- Tabla de Informes y Entregables
CREATE TABLE informes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    practica_id UUID REFERENCES practicas_preprofesionales(id),
    tesis_id UUID REFERENCES tesis(id),
    tipo tipo_informe NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT,
    url_documento VARCHAR(255),
    fecha_entrega TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    observaciones TEXT,
    aprobado BOOLEAN DEFAULT FALSE,
    
    CONSTRAINT check_asociacion CHECK (
        (practica_id IS NOT NULL AND tesis_id IS NULL) OR 
        (practica_id IS NULL AND tesis_id IS NOT NULL)
    )
);

-- Índices para optimización
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_estudiantes_codigo ON estudiantes(codigo);
CREATE INDEX idx_practicas_estado ON practicas_preprofesionales(estado);
CREATE INDEX idx_tesis_estado ON tesis(estado);
