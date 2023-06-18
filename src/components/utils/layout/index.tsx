import type { ReactElement } from 'react';
import { PageLayout } from './components/PageLayout';

export const getDefaultLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};

export const getQuizLayout = (page: ReactElement) => {
  return <PageLayout variant="quiz">{page}</PageLayout>;
};
