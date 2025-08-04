import "./globals.css";
import Navbar from '@/components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="max-w-3xl mx-auto py-6">{children}</main>
        
      </body>
    </html>
  );
}
