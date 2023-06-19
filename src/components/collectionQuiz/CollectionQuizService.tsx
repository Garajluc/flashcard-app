import type { FlashCardWithId } from '@/data/types';

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
