import { v4 as uuidv4 } from 'uuid';
import type {
  FlashCards,
  FlashCard,
  CollectionsWithId,
  CollectionWithId,
  FlashCardsWithId,
  Collection,
} from '@/data/types';
import { getKeysOfNullValues } from '@/components/services/api/ErrorsService';

export const createOrUpdateCollections = (
  collections: CollectionsWithId,
  formData: Collection
): CollectionsWithId => {
  const { category_id, category_name, flashcards } = formData;

  if (!category_id || !category_name || !flashcards) {
    throw new Error(
      `Missing data: ${getKeysOfNullValues(formData).join(', ')}`
    );
  }

  const flashcardsWithId: FlashCardsWithId = flashcards.map(
    (flashcard: FlashCard) => ({
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
    ] as CollectionsWithId;
  }

  return collections;
};

export const getCollectionById = (
  id: string,
  collections: CollectionsWithId
): CollectionWithId => {
  const collection = collections.find((collection) => collection.id === id);

  if (!collection) {
    throw new Error('Collection not found');
  }

  return collection;
};

export const updateCollections = (
  collections: CollectionsWithId,
  collectionId: string,
  formData: Omit<Collection, 'flashcards'> & {
    flashcards: FlashCard[];
  }
): CollectionsWithId => {
  const { category_id, category_name, flashcards } = formData;

  if (!category_id || !category_name || !flashcards) {
    throw new Error(
      `Missing data: ${getKeysOfNullValues(formData).join(', ')}`
    );
  }

  const flashcardsWithId: FlashCards = flashcards.map(
    (flashcard: FlashCard) => ({
      ...flashcard,
      id: uuidv4(),
    })
  );

  return collections.map((collection) => {
    if (collection.id === collectionId) {
      return {
        ...collection,
        ...formData,
        flashcards: flashcardsWithId,
      };
    }
    return collection;
  });
};
