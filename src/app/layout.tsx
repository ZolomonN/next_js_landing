import type { Metadata } from "next";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import ScrollButton from "@/components/ScrollButton";
import ThemeProvider from "@/context/Theme";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Nexus",
  description: "Just pet-project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
      <AppRouterCacheProvider>
        <ThemeProvider>
        <Navigation/>
        {children}
        <Footer />
        <ScrollButton />
        </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
