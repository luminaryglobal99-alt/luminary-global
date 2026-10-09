import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUMINARY GLOBAL | Luxury & Professional Cleaning Service',
  description: 'บริการทำความสะอาดระดับพรีเมียม Soft Clean, Deep Clean และหลังรีโนเวท ด้วยมาตรฐานโรงแรม 5 ดาว และน้ำยาเฉพาะทาง 7 ชนิด',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-pearl text-stone-900 antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
