import Head from 'next/head';
import type { AppProps } from 'next/app';
import { LayoutProvider } from '@/components/utils/LayoutProvider';
import { ThemeProvider } from '@/components/utils/ThemeProvider';
import { ErrorBoundaryWithFallback } from '@/components/utils/ErrorBoundaryWithFallback';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundaryWithFallback>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <LayoutProvider Component={Component}>
          <ErrorBoundaryWithFallback>
            <Component {...pageProps} />
          </ErrorBoundaryWithFallback>
        </LayoutProvider>
      </ThemeProvider>
    </ErrorBoundaryWithFallback>
  );
};

export default App;
