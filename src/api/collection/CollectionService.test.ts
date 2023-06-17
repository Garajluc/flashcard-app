import { updateCollections } from './CollectionService';
import type { Collections } from '@/data/types';

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
            category_id: 'existing_category',
            question: 'New Question',
            answer: 'New Answer',
          },
        ],
      };

      const updatedCollections = updateCollections(collections, requestBody);

      expect(updatedCollections.length).toEqual(1);
      expect(updatedCollections[0].category_id).toEqual('existing_category');
      expect(updatedCollections[0].flashcards.length).toEqual(1);
      expect(updatedCollections[0].flashcards[0].category_id).toEqual(
        'existing_category'
      );
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
            category_id: 'new_category',
            question: 'New Question',
            answer: 'New Answer',
          },
        ],
      };

      const updatedCollections = updateCollections(collections, requestBody);

      expect(updatedCollections.length).toEqual(2);
      expect(updatedCollections[0].category_id).toEqual('existing_category');
      expect(updatedCollections[0].flashcards.length).toEqual(0);
      expect(updatedCollections[1].category_id).toEqual('new_category');
      expect(updatedCollections[1].flashcards[0].category_id).toEqual(
        'new_category'
      );
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
        category_id: 'new_category',
        category_name: 'New Category',
        flashcards: [
          {
            category_id: 'new_category',
            question: 'New Question',
            answer: 'New Answer',
          },
        ],
      };

      expect(() => updateCollections(collections, requestBody)).toThrow();
    });
  });
});
