import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ranveer Singh Sankhala | QA Engineer & Automation Specialist",
  description:
    "Professional portfolio of Ranveer Singh Sankhala - QA Automation Engineer specializing in Playwright, Selenium, and API Testing. 2+ years of experience ensuring software quality.",
  keywords: [
    "QA Engineer",
    "Automation Testing",
    "Playwright",
    "Selenium",
    "Postman",
    "API Testing",
    "Ranveer Singh Sankhala",
    "Software Testing",
  ],
  authors: [{ name: "Ranveer Singh Sankhala" }],
  openGraph: {
    title: "Ranveer Singh Sankhala | QA Engineer",
    description: "Professional QA Automation Engineer Portfolio",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-900 text-white antialiased">
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
