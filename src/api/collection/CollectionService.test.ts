import { updateCollections } from './CollectionService';
import type { CollectionRequestBody, Collections } from '@/data/types';

describe('CollectionService', () => {
  describe('updateCollections', () => {
    it('should add new flashcard into existing collection', () => {
      const collections: Collections = [
        {
          id: '1',
          category_id: 'existing_category',
          category_name: 'Existing Category',
          flashcards: [],
        },
      ];

      const requestBody = {
        category_id: 'existing_category',
        category_name: 'Existing Category',
        flashcards: [
          {
            question: 'New Question',
            answer: 'New Answer',
          },
        ],
      };

      const updatedCollections = updateCollections(collections, requestBody);

      expect(updatedCollections).toHaveLength(1);
      expect(updatedCollections[0].category_id).toEqual('existing_category');
      expect(updatedCollections[0].flashcards).toHaveLength(1);
    });

    it('should create new collection if not matching category_name found', () => {
      const collections: Collections = [
        {
          id: '1',
          category_id: 'existing_category',
          category_name: 'Existing Category',
          flashcards: [],
        },
      ];

      const requestBody = {
        category_id: 'new_category',
        category_name: 'New Category',
        flashcards: [
          {
            question: 'New Question',
            answer: 'New Answer',
          },
        ],
      };

      const updatedCollections = updateCollections(collections, requestBody);

      expect(updatedCollections).toHaveLength(2);
      expect(updatedCollections[0].category_id).toEqual('existing_category');
      expect(updatedCollections[0].flashcards).toHaveLength(0);
      expect(updatedCollections[1].category_id).toEqual('new_category');
    });

    it('should throw error if missing data in the POST request', () => {
      const collections: Collections = [
        {
          id: '1',
          category_id: 'existing_category',
          category_name: 'Existing Category',
          flashcards: [],
        },
      ];

      const requestBody = {
        category_name: 'New Category',
        flashcards: [
          {
            question: 'New Question',
            answer: 'New Answer',
          },
        ],
      };

      expect(() =>
        updateCollections(collections, requestBody as CollectionRequestBody)
      ).toThrow();
    });
  });
});
