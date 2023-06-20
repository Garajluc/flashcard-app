import type { ReactNode } from 'react';
import type { NextPage } from 'next';

type Page<P = object> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type LayoutProviderProps = {
  Component: Page;
  children: React.ReactNode;
};

export const LayoutProvider = ({
  Component,
  children,
}: LayoutProviderProps) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<>{children}</>);
};
