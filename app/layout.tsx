import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Handmade",
  description: "Give Wings to Your Talent",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  const messages = await getMessages();
  return (
    <html lang={locale} className={inter.className}>
      <UserProvider>
        <body>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </body>
      </UserProvider>
    </html>
  );
}
