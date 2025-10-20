import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import '@/app/style/globals.css';
import '@/app/style/typography.css';
import { Toaster } from 'sonner';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Buscapão',
  description: 'Seu app de comparação de preços',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <UserProvider>
        <body className={`${geistSans.variable} antialiased`}>
          {children}
          <Toaster
            position="top-center"
            duration={3000}
            icons={{
              success: '✅',
              error: '❌',
              warning: '⚠️',
              info: 'ℹ️',
            }}
            toastOptions={{
              classNames: {
                toast: 'border text-base',
                title: 'font-semibold',
                success: 'bg-green-100 text-green-900 border-green-200',
                error: 'bg-red-100 text-red-900 border-red-200',
              },
            }}
          />
        </body>
      </UserProvider>
    </html>
  );
}
