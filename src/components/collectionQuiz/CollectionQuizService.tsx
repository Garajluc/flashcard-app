import type { FlashCard } from '@/data/types';

export const calculatePercentage = (total: number, value: number) =>
  Math.round((value / total) * 100);

export const shiftFirstToEnd = (cards: FlashCard[]) => {
  const [first, ...rest] = cards;
  return [...rest, first];
};

export const removeFirst = (cards: FlashCard[]) => {
  const [_first, ...rest] = cards;
  return rest;
};
