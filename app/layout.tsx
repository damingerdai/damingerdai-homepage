import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Damingerdai Homepage",
  description: "damingerdai homepage"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme:"light" }}>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="flex min-h-screen items-center flex-col px-4 pt-4 md:px-24">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
