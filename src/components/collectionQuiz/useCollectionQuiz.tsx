import { useCallback, useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import {
  removeById,
  removeDuplicates,
  shiftFirstToEnd,
} from './CollectionQuizService';
import { CollectionsContext } from '@/context/CollectionsContext';
import { getCollectionById } from '@/api/collection/CollectionService';
import { useQueryValueFromRouter } from '@/utils/useQueryValueFromRouter';
import type { FlashCardWithId, FlashCardsWithId } from '@/data/types';
import { useQueryValueFromRouterIfAvailable } from '@/utils/useQueryValueFromRouterIfAvailable';

type HookReturn = {
  activeCard?: FlashCardWithId;
  wrongAnswerCount: number;
  answeredCardsCount: number;
  correctAnswerCount: number;
  isIncorrectIncluded: boolean;
  handleKnown: () => void;
  handleStillLearning: () => void;
  handleIncludeIncorrect: () => void;
};

export const useCollectionQuiz = (): HookReturn => {
  const router = useRouter();
  const collectionId = useQueryValueFromRouter('id');
  const cardId = useQueryValueFromRouterIfAvailable('cardId');
  const { collections } = useContext(CollectionsContext);
  const { flashcards } = getCollectionById(collectionId, collections);

  const [isIncorrectIncluded, setIsIncorrectIncluded] = useState(true);
  const [unansweredCards, setUnansweredCards] = useState(flashcards);
  const [correctlyAnsweredCards, setCorrectlyAnsweredCards] =
    useState<FlashCardsWithId>([]);
  const [wronglyAnsweredCards, setWronglyAnsweredCards] =
    useState<FlashCardsWithId>([]);

  const activeCard = useMemo(
    () => flashcards.filter((card) => card.id === cardId)[0],
    [cardId, flashcards]
  );

  const handleRedirectToNextCard = useCallback(
    (cardId?: string) => {
      const urlObject = {
        pathname: `/collection/${collectionId}/quiz`,
        query: { ...(cardId ? { cardId } : {}) },
      };
      router.push(urlObject);
    },
    [collectionId, router]
  );

  const handleIncludeIncorrect = useCallback(() => {
    setIsIncorrectIncluded((prev) => !prev);
  }, []);

  const handleStillLearning = useCallback(() => {
    if (!cardId) return;

    const cardsWithoutAnsweredQuestion = removeById(unansweredCards, cardId);
    const cardsWithIncorrectlyAnsweredQuestions = removeDuplicates([
      ...shiftFirstToEnd(unansweredCards),
      ...wronglyAnsweredCards,
    ]);
    const cardsToAnswer = isIncorrectIncluded
      ? cardsWithIncorrectlyAnsweredQuestions
      : cardsWithoutAnsweredQuestion;

    setWronglyAnsweredCards((prev) => [...prev, activeCard]);
    setUnansweredCards(cardsToAnswer);
    handleRedirectToNextCard(cardsToAnswer[0]?.id);
  }, [
    activeCard,
    cardId,
    isIncorrectIncluded,
    unansweredCards,
    wronglyAnsweredCards,
    handleRedirectToNextCard,
  ]);

  const handleKnown = useCallback(() => {
    if (!cardId) return;

    const cardsWithoutAnsweredQuestion = removeById(unansweredCards, cardId);

    setCorrectlyAnsweredCards((prev) => [...prev, activeCard]);
    setUnansweredCards(cardsWithoutAnsweredQuestion);
    handleRedirectToNextCard(cardsWithoutAnsweredQuestion[0]?.id);
  }, [activeCard, cardId, handleRedirectToNextCard, unansweredCards]);

  const answeredCardsCount = flashcards.length - unansweredCards.length;
  const correctAnswerCount = correctlyAnsweredCards.length;
  const wrongAnswerCount = wronglyAnsweredCards.length;

  return {
    activeCard,
    wrongAnswerCount,
    answeredCardsCount,
    correctAnswerCount,
    isIncorrectIncluded,
    handleKnown,
    handleStillLearning,
    handleIncludeIncorrect,
  };
};
