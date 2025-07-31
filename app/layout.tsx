
import "./globals.css";
import Navbar from '@/components/Navbar';
import { Metadata } from "next";
import {Inter, Roboto} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({subsets: ['latin'], weight: ['400']});
const interLight = Inter({
  subsets: ['latin'],
  weight: ['100'],   // 300 是 Inter 的 Light 字重
});

export const metadata: Metadata = {
  title: 'udemy nextjs',
  description: 'empty des',
  keywords: ['mel', 'GT', 'darh maul']
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interLight.className}>
        <Navbar/>
        <main className="max-w-4xl mx-auto py-6">{children}</main>
            <div className={interLight.className}>
      這是 Inter Light 字重的文字
    </div>
      </body>
    </html>
  );
}
