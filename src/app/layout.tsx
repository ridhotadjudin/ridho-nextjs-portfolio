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
  metadataBase: new URL("https://ridhotadjudin.id"),
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
    "Ridho Tadjudin",
  ],
  authors: [{ name: "Ridho Tadjudin", url: "https://ridhotadjudin.id" }],
  alternates: {
    canonical: "https://ridhotadjudin.id",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ridhotadjudin",
    title: "Ridho Tadjudin — Senior QA Automation Engineer & SDET",
    description:
      "Quality Engineer specializing in enterprise FinTech automation and cross-country QA leadership.",
  },
  openGraph: {
    type: "website",
    title: "Ridho Tadjudin — Senior QA Automation Engineer & SDET",
    description: "Full Stack Quality Engineer | SDET at Manulife Indonesia",
    url: "https://ridhotadjudin.id",
    siteName: "Ridho Tadjudin Portfolio",
    images: [
      {
        url: "https://ridhotadjudin.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ridho Tadjudin Portfolio",
      },
    ],
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
        {/* JSON-LD Structured Data for Google rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ridho Tadjudin",
              givenName: "Ridho",
              familyName: "Tadjudin",
              jobTitle: "Senior QA Automation Engineer & SDET",
              description:
                "Full Stack Quality Engineer specializing in enterprise FinTech automation, CI/CD integration, and cross-country QA leadership.",
              url: "https://ridhotadjudin.id",
              sameAs: [
                "https://github.com/ridhotadjudin",
                "https://www.linkedin.com/in/ridhotadjudin",
                "https://ridhotadjudin.my.id",
              ],
              email: "ridhotadjudin@gmail.com",
              image: "https://ridhotadjudin.id/og-image.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressCountry: "ID",
              },
              worksFor: {
                "@type": "Organization",
                name: "Manulife Indonesia",
              },
              knowsAbout: [
                "Quality Assurance",
                "Test Automation",
                "Selenium",
                "Playwright",
                "Appium",
                "Java",
                "TypeScript",
                "FinTech",
                "CI/CD",
                "Performance Testing",
                "Cybersecurity",
              ],
            }),
          }}
        />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
