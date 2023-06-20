import { useContext, useMemo } from 'react';
import { calculatePercentage } from '../CollectionQuizService';
import { getCollectionById } from '@/api/collection/CollectionService';
import { CollectionsContext } from '@/context/CollectionsContext';
import { useQueryValueFromRouter } from '@/utils/useQueryValueFromRouter';

type HookProps = {
  answeredCardsCount: number;
};

type HookReturn = {
  progress: number;
  cardsTotalCount: number;
  answeredCardsCount: number;
  collectionName: string;
};

export const useCollectionQuizAppBar = ({
  answeredCardsCount,
}: HookProps): HookReturn => {
  const collectionId = useQueryValueFromRouter('id');
  const { collections } = useContext(CollectionsContext);
  const collection = getCollectionById(collectionId, collections);

  const cardsTotalCount = collection.flashcards.length;

  const progress = useMemo(
    () => calculatePercentage(cardsTotalCount, answeredCardsCount),
    [cardsTotalCount, answeredCardsCount]
  );

  return {
    progress,
    cardsTotalCount,
    answeredCardsCount,
    collectionName: collection.category_name,
  };
};
