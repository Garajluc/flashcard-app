import type { ReactElement } from 'react';
import { PageLayout } from './components/PageLayout';

export const getDefaultLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};
