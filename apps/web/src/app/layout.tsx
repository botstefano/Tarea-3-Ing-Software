import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrpcProvider } from "@/components/trpc-provider";
import { Sidebar } from "@/components/sidebar";
import { TopHeader } from "@/components/top-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNT - Gestión de Prácticas y Tesis",
  description: "Sistema institucional para la Universidad Nacional de Trujillo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 min-h-screen flex flex-col`} suppressHydrationWarning>
        <TrpcProvider>
          <Sidebar />
          <div className="flex flex-col flex-1">
            <TopHeader />
            <main className="flex-1 ml-64 min-h-screen bg-slate-50/50">
              {children}
            </main>
          </div>
        </TrpcProvider>
      </body>
    </html>
  );
}
