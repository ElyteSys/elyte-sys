import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
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
      className={cn("scroll-smooth", outfit.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <main id="main-content" className="flex w-full flex-col">
            {children}
          </main>
          <div className="ambient-glow-2" aria-hidden="true" />
        </ThemeProvider>
      </body>
    </html>
  );
}
