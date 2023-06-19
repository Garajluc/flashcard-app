import { useCallback, useContext, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { CollectionsContext } from '@/context/CollectionsContext';
import { convertValueToId } from '@/components/services/IdService';

type HookReturn = {
  options: string[];
  setCategoryId: (event: React.FocusEvent<HTMLDivElement, Element>) => void;
};

export const useCreateCollectionFormFields = (): HookReturn => {
  const { setValue } = useFormContext();
  const { collections } = useContext(CollectionsContext);

  const options = useMemo(
    () => collections?.map((collection) => collection.category_name) ?? [],
    [collections]
  );

  const setCategoryId = useCallback(
    (event: React.FocusEvent<HTMLDivElement, Element>) => {
      const { value: categoryName } = event.target as HTMLInputElement;
      const categoryId = convertValueToId(categoryName);
      setValue('category_id', categoryId, { shouldValidate: true });
    },
    [setValue]
  );

  return { options, setCategoryId };
};
