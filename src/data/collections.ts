import type { FlashCards, Collections } from './types';

export const react_collection: FlashCards = [
  {
    id: 1,
    category_id: 'react_js',
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    id: 2,
    category_id: 'react_js',
    question: 'Question 2',
    answer: 'Answer 2',
  },
];

export const node_collection: FlashCards = [
  {
    id: 1,
    category_id: 'node_js',
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    id: 2,
    category_id: 'node_js',
    question: 'Question 2',
    answer: 'Answer 2',
  },
];

export const collections: Collections = [
  {
    id: 1,
    category_id: 'react_js',
    category_name: 'ReactJS',
    flashcards: react_collection,
  },
  {
    id: 2,
    category_id: 'node_js',
    category_name: 'NodeJS',
    flashcards: node_collection,
  },
];
