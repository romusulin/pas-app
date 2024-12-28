import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "PAS Application",
	description: "Paragliding accurracy scoring application",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`} >
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
