import { v4 as uuidv4 } from 'uuid';
import type {
  Collections,
  CollectionRequestBody,
  FlashCards,
  FlashCardRequestBody,
  Collection,
} from '@/data/types';

export const createOrUpdateCollections = (
  collections: Collections,
  requestBody: CollectionRequestBody
): Collections => {
  const { category_id, category_name, flashcards } = requestBody;

  if (!category_id || !category_name || !flashcards || !flashcards.length) {
    throw new Error('Missing data');
  }

  const flashcardsWithId: FlashCards = flashcards.map(
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
        collection.flashcards.push(...flashcardsWithId);
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
        flashcards: flashcardsWithId,
      },
    ] as Collections;
  }

  return collections;
};

export const getCollectionById = (
  id: string,
  collections: Collections
): Collection => {
  const collection = collections.find((collection) => collection.id === id);

  if (!collection) {
    throw new Error('Collection not found');
  }

  return collection;
};

export const updateCollections = (
  collections: Collections,
  collectionId: string,
  requestBody: Collection
): Collections => {
  const { category_id, category_name, flashcards } = requestBody;

  if (!category_id || !category_name || !flashcards || !flashcards.length) {
    throw new Error('Missing data'); // more detailed!
  }

  return collections.map((collection) => {
    if (collection.id === collectionId) {
      return {
        ...collection,
        ...requestBody,
      };
    }
    return collection;
  });
};
