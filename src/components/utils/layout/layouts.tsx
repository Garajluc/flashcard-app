import type { ReactElement } from 'react';

export const getDefaultLayout = (page: ReactElement) => {
  return <div>{page}</div>;
};
