import type { CollectionsWithId, FlashCardsWithId } from './types';

export const react_collection: FlashCardsWithId = [
  {
    id: '1',
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    id: '2',
    question: 'Question 2',
    answer: 'Answer 2',
  },
];

export const node_collection: FlashCardsWithId = [
  {
    id: '1',
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    id: '2',
    question: 'Question 2',
    answer: 'Answer 2',
  },
];

export const collections: CollectionsWithId = [
  {
    id: '1',
    category_id: 'reactjs',
    category_name: 'ReactJS',
    flashcards: react_collection,
  },
  {
    id: '2',
    category_id: 'nodejs',
    category_name: 'NodeJS',
    flashcards: node_collection,
  },
];
