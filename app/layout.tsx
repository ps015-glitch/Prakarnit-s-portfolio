import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prakarnit Srivastava | Digital Marketer & Business Professional",
  description:
    "Portfolio of Prakarnit Srivastava — B.Com (Hons) student from Lucknow passionate about Digital Marketing, Meta Ads, Business, Finance, and Entrepreneurship.",
  keywords: [
    "Prakarnit Srivastava",
    "Digital Marketing",
    "Meta Ads",
    "Marketing Student",
    "Lucknow",
    "Portfolio",
    "B.Com",
  ],
  authors: [{ name: "Prakarnit Srivastava" }],
  creator: "Prakarnit Srivastava",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Prakarnit Srivastava | Digital Marketer & Business Professional",
    description:
      "Portfolio of Prakarnit Srivastava — aspiring digital marketer and business professional from Lucknow, India.",
    siteName: "Prakarnit Srivastava Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakarnit Srivastava | Digital Marketer",
    description: "Aspiring Digital Marketer & Business Professional from Lucknow, India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable + " " + syne.variable + " font-sans antialiased"}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
