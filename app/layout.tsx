import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ranveer Singh Sankhala | QA Lead & AI Automation Engineer",
  description:
    "Professional portfolio of Ranveer Singh Sankhala - ISTQB Certified QA Lead & AI Workflow Engineer with 6+ years of experience in Playwright, Selenium, and API Testing.",
  keywords: [
    "QA Lead",
    "QA Engineer",
    "Automation Testing",
    "Playwright",
    "Selenium",
    "PyTest",
    "Jenkins",
    "n8n",
    "Ranveer Singh Sankhala",
    "Software Quality Assurance",
  ],
  authors: [{ name: "Ranveer Singh Sankhala" }],
  openGraph: {
    title: "Ranveer Singh Sankhala | QA Lead & AI Automation Engineer",
    description: "Professional QA Lead & Automation Engineer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-900 text-white antialiased">
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
