import { Roboto } from 'next/font/google';

const inter = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Flash Cards App',
  description: 'Copyright by Lucia Garajova',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
