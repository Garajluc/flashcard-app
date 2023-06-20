import { useCallback } from 'react';
import { useRouter } from 'next/router';

type HookReturn = {
  successCallback: () => void;
};

export const useCollectionForm = (): HookReturn => {
  const router = useRouter();

  const successCallback = useCallback(() => {
    router.push({
      pathname: '/',
    });
  }, [router]);

  return { successCallback };
};
