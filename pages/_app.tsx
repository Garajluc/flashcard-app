import Head from 'next/head';
import type { AppProps } from 'next/app';
import { LayoutProvider } from '@/components/utils/LayoutProvider';
import { ThemeProvider } from '@/components/utils/ThemeProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <LayoutProvider Component={Component}>
          <Component {...pageProps} />
        </LayoutProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
