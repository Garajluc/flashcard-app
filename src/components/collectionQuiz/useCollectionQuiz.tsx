import { useCallback, useContext, useState } from 'react';
import shuffle from 'lodash.shuffle';
import {
  calculatePercentage,
  removeFirst,
  shiftFirstToEnd,
} from './CollectionQuizService';
import { CollectionsContext } from '@/context/CollectionsContext';
import { getCollectionById } from '@/api/collection/CollectionService';
import { useQueryValueFromRouter } from '@/utils/useQueryValueFromRouter';
import type {
  CollectionWithId,
  FlashCardWithId,
  FlashCardsWithId,
} from '@/data/types';

type HookReturn = {
  activeCard?: FlashCardWithId;
  collection: CollectionWithId;
  progress: number;
  correctAnswerCount: number;
  wrongAnswerCount: number;
  includeIncorrect: boolean;
  unansweredCards: FlashCardsWithId;
  handleStillLearning: () => void;
  handleKnown: () => void;
  handleIncludeIncorrect: () => void;
  handleShuffle: () => void;
};

export const useCollectionQuiz = (): HookReturn => {
  const id = useQueryValueFromRouter('id');
  const { collections } = useContext(CollectionsContext);
  const collection = getCollectionById(id, collections);
  const flashcardsTotalLength = collection.flashcards.length;
  const [progress, setProgress] = useState(0);

  const [includeIncorrect, setIncludeIncorrect] = useState(true);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);
  const [unansweredCards, setUnansweredCards] = useState(collection.flashcards);

  const handleStillLearning = useCallback(() => {
    const shiftedCards = includeIncorrect
      ? shiftFirstToEnd(unansweredCards)
      : removeFirst(unansweredCards);

    const progressPercentage = calculatePercentage(
      flashcardsTotalLength,
      flashcardsTotalLength -
        (includeIncorrect ? unansweredCards.length : unansweredCards.length - 1)
    );

    setWrongAnswerCount((prev) => prev + 1);
    setUnansweredCards(shiftedCards);
    setProgress(progressPercentage);
  }, [flashcardsTotalLength, includeIncorrect, unansweredCards]);

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

  const handleIncludeIncorrect = useCallback(() => {
    setIncludeIncorrect((prev) => !prev);
  }, []);

  const handleShuffle = useCallback(() => {
    setUnansweredCards((prev) => shuffle(prev));
  }, []);

  return {
    activeCard: unansweredCards[0],
    collection,
    progress,
    correctAnswerCount,
    wrongAnswerCount,
    includeIncorrect,
    unansweredCards,
    handleStillLearning,
    handleKnown,
    handleIncludeIncorrect,
    handleShuffle,
  };
};
