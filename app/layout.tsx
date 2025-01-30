import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Acharya: ",
    description: "AI-Powered Career Guru",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={`${inter.className}`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <main className="min-h-screen">{children}</main>
                        <footer className="bg-muted/50 py-12">
                            <div className="container mx-auto px-4 text-center text-gray-200">
                                <p>Made with love Mrigangka</p>
                            </div>
                        </footer>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
