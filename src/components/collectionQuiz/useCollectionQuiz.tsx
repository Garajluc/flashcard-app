import { useCallback, useContext, useState } from 'react';
import { calculatePercentage, shiftFirstToEnd } from './CollectionQuizService';
import { CollectionsContext } from '@/context/CollectionsContext';
import { getCollectionById } from '@/api/collection/CollectionService';
import { useQueryValueFromRouter } from '@/utils/useQueryValueFromRouter';
import type { Collection } from '@/data/types';

type HookReturn = {
  activeCard?: Collection['flashcards'][number];
  collection: Collection;
  progress: number;
  correctAnswerCount: number;
  wrongAnswerCount: number;
  handleStillLearning: () => void;
  handleKnown: () => void;
};

export const useCollectionQuiz = (): HookReturn => {
  const id = useQueryValueFromRouter('id');
  const { collections } = useContext(CollectionsContext);
  const collection = getCollectionById(id, collections);
  const flashcardsTotalLength = collection.flashcards.length;
  const [progress, setProgress] = useState(0);

  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);
  const [unansweredCards, setUnansweredCards] = useState(collection.flashcards);

  const handleStillLearning = useCallback(() => {
    const shiftedCards = shiftFirstToEnd(unansweredCards);
    const progressPercentage = calculatePercentage(
      flashcardsTotalLength,
      flashcardsTotalLength - unansweredCards.length
    );

    setWrongAnswerCount((prev) => prev + 1);
    setUnansweredCards(shiftedCards);
    setProgress(progressPercentage);
  }, [flashcardsTotalLength, unansweredCards]);

  const handleKnown = useCallback(() => {
    const [_first, ...rest] = unansweredCards;
    const progressPercentage = calculatePercentage(
      flashcardsTotalLength,
      flashcardsTotalLength - rest.length
    );

    setCorrectAnswerCount((prev) => prev + 1);
    setUnansweredCards(rest);
    setProgress(progressPercentage);
  }, [flashcardsTotalLength, unansweredCards]);

  return {
    activeCard: unansweredCards[0],
    collection,
    progress,
    correctAnswerCount,
    wrongAnswerCount,
    handleStillLearning,
    handleKnown,
  };
};
