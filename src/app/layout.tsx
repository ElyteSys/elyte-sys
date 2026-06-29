import LayoutShell from "@/components/layout-shell";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ElyteSys | Premium Laptop Sales & Expert Service Solutions",
  description:
    "Buy, Repair & Upgrade Your Laptop With Trusted Experts. Premium laptop sales, genuine spare parts, and expert service solutions in Tamil Nadu.",
  icons: {
    icon: "./favicon.svg",
    apple: "./favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", poppins.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LayoutShell>{children}</LayoutShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
