import { useCallback, useContext, useMemo, useState } from 'react';
import shuffle from 'lodash.shuffle';
import { useRouter } from 'next/router';
import {
  calculatePercentage,
  removeById,
  removeDuplicates,
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
  const router = useRouter();
  const collectionId = useQueryValueFromRouter('id');
  const cardId = useQueryValueFromRouter('cardId');
  const { collections } = useContext(CollectionsContext);
  const collection = getCollectionById(collectionId, collections);
  const flashcards = collection.flashcards;
  const flashcardsLength = flashcards.length;
  const activeCard = useMemo(
    () => flashcards.filter((card) => card.id === cardId),
    [cardId, flashcards]
  );

  const [unansweredCards, setUnansweredCards] = useState(flashcards);
  const [_answeredCards, setAnsweredCards] = useState<FlashCardsWithId>([]);
  const [correctlyAnsweredCards, setCorrectlyAnsweredCards] =
    useState<FlashCardsWithId>([]);
  const [wronglyAnsweredCards, setWronglyAnsweredCards] =
    useState<FlashCardsWithId>([]);
  const [includeIncorrect, setIncludeIncorrect] = useState(true);
  const [progress, setProgress] = useState(0);

  const setProgressValue = useCallback(
    (progress: number) =>
      setProgress(
        calculatePercentage(flashcardsLength, flashcardsLength - progress)
      ),
    [flashcardsLength]
  );

  const handleCardIdChange = useCallback(
    (cardId?: string) => {
      if (!cardId) return;
      router.push(
        `/collection/${collectionId}/quiz?cardId=${cardId}`,
        undefined,
        { shallow: true }
      );
    },
    [collectionId, router]
  );

  const handleStillLearning = useCallback(() => {
    const cardsWithoutAnsweredQuestion = removeById(unansweredCards, cardId);
    const cardsWithIncorrectlyAnsweredQuestions = removeDuplicates([
      ...shiftFirstToEnd(unansweredCards),
      ...wronglyAnsweredCards,
    ]);
    const cardsToAnswer = includeIncorrect
      ? cardsWithIncorrectlyAnsweredQuestions
      : cardsWithoutAnsweredQuestion;

    setUnansweredCards(cardsToAnswer);
    setAnsweredCards((prev) => [...prev, ...activeCard]);
    setWronglyAnsweredCards((prev) => [...prev, ...activeCard]);
    setProgressValue(cardsToAnswer.length);
    handleCardIdChange(cardsToAnswer[0]?.id);
  }, [
    activeCard,
    cardId,
    handleCardIdChange,
    includeIncorrect,
    setProgressValue,
    unansweredCards,
    wronglyAnsweredCards,
  ]);

  const handleKnown = useCallback(() => {
    const cardsWithoutAnsweredQuestion = removeById(unansweredCards, cardId);

    setUnansweredCards(cardsWithoutAnsweredQuestion);
    setAnsweredCards((prev) => [...prev, ...activeCard]);
    setCorrectlyAnsweredCards((prev) => [...prev, ...activeCard]);
    setProgressValue(cardsWithoutAnsweredQuestion.length);
    handleCardIdChange(cardsWithoutAnsweredQuestion[0]?.id);
  }, [
    activeCard,
    cardId,
    handleCardIdChange,
    setProgressValue,
    unansweredCards,
  ]);

  const handleIncludeIncorrect = useCallback(() => {
    setIncludeIncorrect((prev) => !prev);
  }, []);

  const handleShuffle = useCallback(() => {
    setUnansweredCards((prev) => shuffle(prev));
  }, []);

  return {
    activeCard: unansweredCards[0],
    correctAnswerCount: correctlyAnsweredCards.length,
    wrongAnswerCount: wronglyAnsweredCards.length,
    includeIncorrect,
    unansweredCards,
    collection,
    progress,
    handleStillLearning,
    handleKnown,
    handleIncludeIncorrect,
    handleShuffle,
  };
};
