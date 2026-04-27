import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Iswarya S — Senior DevOps Engineer",
  description:
    "Portfolio of Iswarya S — Senior DevOps Engineer specializing in AWS, Docker, Terraform, Jenkins, and large-scale CI/CD automation. India DevOps Hackathon winner.",
  keywords: [
    "Iswarya S",
    "DevOps Engineer",
    "SRE",
    "AWS",
    "Terraform",
    "Docker",
    "ECS",
    "Jenkins",
    "Chennai",
  ],
  authors: [{ name: "Iswarya S" }],
  openGraph: {
    title: "Iswarya S — Senior DevOps Engineer",
    description:
      "Senior DevOps Engineer · AWS · Terraform · Docker · ECS · Jenkins · India DevOps Hackathon Winner.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
