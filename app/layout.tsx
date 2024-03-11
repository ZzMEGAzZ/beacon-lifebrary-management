import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import TailFooter from '@/components/objects/footer/TailFooter';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'TU Library Management',
    description: 'TU Library Management',
    icons: [
        {
            media: '(prefers-color-scheme: light)',
            url: '/favicon.ico',
            href: '/favicon.ico',
        }
    ]
};

export default function RootLayout({ children }: { children: ReactNode }) {

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" sizes='any' />
                
                <title>TU Library Management</title>
            </head>
            <body className={`w-screen h-screen ${inter.className}`}>
                <header></header>

                <main className={`w-screen h-[95dvh] bg-white text-Black`}>
                    <div className="h-full w-screen">
                        <div className="w-full h-full bg-white  text-Black">{children}</div>
                    </div>
                </main>

                <footer className="z-[999] h-[5dvh]">
                    <TailFooter />
                </footer>
            </body>
        </html>
    );
}
