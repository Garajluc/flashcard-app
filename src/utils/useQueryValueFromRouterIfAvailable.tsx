import { useRouter } from 'next/router';

export const useQueryValueFromRouterIfAvailable = (
  queryString: string
): string | undefined => {
  const { query } = useRouter();
  const queryValue = query[queryString];

  if (Array.isArray(queryValue)) {
    throw new Error(`${queryString} is not expect to be an array`);
  }

  return queryValue;
};
