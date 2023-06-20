import type { NextApiRequest, NextApiResponse } from 'next';
import { collections } from '@/data/collections';
import type { CollectionsWithId } from '@/data/types';
import { createOrUpdateCollection } from '@/api/collection/CollectionService';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CollectionsWithId>
) {
  if (req.method == 'POST') {
    // This is a mock implementation of API call
    // If we would have implemented a DB connection, we would interact with DB data instead of local collections data
    const updatedCollections = createOrUpdateCollection(
      collections,
      JSON.parse(req.body)
    );
    res.status(201).json(updatedCollections);
  }
}
