import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type DynamicRouterProviderProps = {
  children: React.ReactNode;
};

export const DynamicRouterProvider = ({
  children,
}: DynamicRouterProviderProps) => {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

  if (!ready) return null;

  return <>{children}</>;
};
