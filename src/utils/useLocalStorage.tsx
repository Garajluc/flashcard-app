import { useState, useCallback, useEffect } from 'react';

export const useLocalStorage = <ValueType,>(
  key: string,
  initialValue: ValueType
): [ValueType, (newValue: ValueType) => void] => {
  const [collections, setCollections] = useState<ValueType>(() => {
    const storedValue =
      typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    return storedValue === null ? initialValue : JSON.parse(storedValue);
  });

  const setValueInLocalStorage = useCallback(
    (newValue: ValueType) => {
      setCollections((currentValue) => {
        const result =
          typeof newValue === 'function' ? newValue(currentValue) : newValue;
        if (typeof window !== 'undefined')
          localStorage.setItem(key, JSON.stringify(result));
        return result;
      });
    },
    [key]
  );

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (
        typeof window !== 'undefined' &&
        e.storageArea === localStorage &&
        e.key === key
      ) {
        setCollections(e.newValue ? JSON.parse(e.newValue) : e.newValue);
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key]);

  return [collections, setValueInLocalStorage];
};
