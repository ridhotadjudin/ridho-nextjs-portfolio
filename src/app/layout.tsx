import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ridho Tadjudin — Senior QA Automation Engineer & SDET",
  description:
    "Personal portfolio of Ridho Tadjudin. Quality Engineer specializing in enterprise FinTech automation, CI/CD integration, and cross-country QA leadership.",
  keywords: [
    "QA Engineer",
    "SDET",
    "Automation",
    "Selenium",
    "Playwright",
    "Java",
    "FinTech",
    "Quality Assurance",
  ],
  authors: [{ name: "Ridho Tadjudin" }],
  openGraph: {
    title: "Ridho Tadjudin — Senior QA Automation Engineer & SDET",
    description:
      "Quality Engineer specializing in enterprise FinTech automation, CI/CD integration, and cross-country QA leadership.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridho Tadjudin — Senior QA Automation Engineer",
    description:
      "Quality Engineer specializing in enterprise FinTech automation and cross-country QA leadership.",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
