import type {
  Collections,
  CollectionRequestBody,
  FlashCards,
  FlashCardRequestBody,
} from '@/data/types';
import { v4 as uuidv4 } from 'uuid';

export const updateCollections = (
  collections: Collections,
  requestBody: CollectionRequestBody
): Collections => {
  const { category_id, category_name, flashcards } = requestBody;

  if (!category_id || !category_name || !flashcards || !flashcards.length) {
    throw new Error('Missing data');
  }

  const updatedFlashcards: FlashCards = flashcards.map(
    (flashcard: FlashCardRequestBody) => ({
      ...flashcard,
      id: uuidv4(),
    })
  );

  const isCollectionExisting = collections.find(
    (collection) => collection.category_id === category_id
  );

  if (isCollectionExisting) {
    return collections.map((collection) => {
      if (collection.category_id === category_id) {
        collection.flashcards.push(...updatedFlashcards);
      }
      return collection;
    });
  }

  if (!isCollectionExisting) {
    return [
      ...collections,
      {
        id: uuidv4(),
        category_id,
        category_name,
        flashcards: updatedFlashcards,
      },
    ] as Collections;
  }

  return collections;
};
