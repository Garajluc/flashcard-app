import { useRouter } from 'next/router';

export const useQueryValueFromRouter = (queryString: string): string => {
  const { query } = useRouter();
  const queryValue = query[queryString];

  if (Array.isArray(queryValue)) {
    throw new Error(`${queryString} is not expect to be an array`);
  }

  if (!queryValue) {
    throw new Error(`URL does not contain queryString ${queryString}`);
  }

  return queryValue;
};
