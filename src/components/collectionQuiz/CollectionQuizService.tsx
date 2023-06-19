import type { FlashCardWithId, FlashCardsWithId } from '@/data/types';

export const calculatePercentage = (total: number, value: number) =>
  Math.round((value / total) * 100);

export const shiftFirstToEnd = (cards: FlashCardWithId[]) => {
  const [first, ...rest] = cards;
  return [...rest, first];
};

export const removeFirst = (cards: FlashCardWithId[]) => {
  const [_first, ...rest] = cards;
  return rest;
};

export const removeDuplicates = (array: FlashCardsWithId) => {
  return array.filter(
    (item, index) => array.findIndex((item2) => item.id === item2.id) === index
  );
};

export const removeById = (cards: FlashCardsWithId, id: string) =>
  cards.filter((card) => card.id !== id);
