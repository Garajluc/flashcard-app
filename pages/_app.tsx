import Head from 'next/head';
import type { AppProps } from 'next/app';
import { LayoutProvider } from '@/components/utils/LayoutProvider';
import { ThemeProvider } from '@/components/utils/ThemeProvider';
import { ErrorBoundaryWithFallback } from '@/components/utils/ErrorBoundaryWithFallback';
import { CollectionsContext } from '@/context/CollectionsContext';
import { useCollectionsContext } from '@/context/useCollectionsContext';
import { DynamicRouterProvider } from '@/components/utils/DynamicRouterProvider';

const App = ({ Component, pageProps }: AppProps) => {
  const collectionsContextValue = useCollectionsContext();

  return (
    <DynamicRouterProvider>
      <ErrorBoundaryWithFallback>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider>
          <LayoutProvider Component={Component}>
            <ErrorBoundaryWithFallback>
              <CollectionsContext.Provider value={collectionsContextValue}>
                <Component {...pageProps} />
              </CollectionsContext.Provider>
            </ErrorBoundaryWithFallback>
          </LayoutProvider>
        </ThemeProvider>
      </ErrorBoundaryWithFallback>
    </DynamicRouterProvider>
  );
};

export default App;
