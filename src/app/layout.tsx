import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import SolanaProvider from "@/providers/solana-provider";
import { Sidebar } from "@/views/home/components/Sidebar/page";
import { SidebarfunctionalityProvider } from "@/providers/SideBarprovider";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            <SolanaProvider>
          <SidebarfunctionalityProvider>
          <div className="flex">
        <Sidebar></Sidebar>

        <div
          className={
            "flex flex-col min-h-screen max-w-[1280px] ml-20 mx-auto flex-grow "
          }
        >
          <Navbar />
              <div className="px-[1rem]">{children}</div>
          <Footer />
        </div>
      </div>

              <Toaster />
          </SidebarfunctionalityProvider>
            </SolanaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
