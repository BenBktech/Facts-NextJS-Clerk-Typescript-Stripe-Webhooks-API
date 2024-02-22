import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs'

const LSpartan = League_Spartan({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-l-spartan'
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#262626' }
    }}>
      <html lang="en">
        <body className={LSpartan.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}