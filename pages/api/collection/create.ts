import type { NextApiRequest, NextApiResponse } from 'next';
import { collections } from '@/data/collections';
import { createOrUpdateCollections } from '@/api/collection/CollectionService';
import type { CollectionsWithId } from '@/data/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CollectionsWithId>
) {
  if (req.method == 'POST') {
    // This is a mock implementation of API call
    // If we would have implemented a DB connection, we would interact with DB data instead of local collections data
    const updatedCollections = createOrUpdateCollections(
      collections,
      JSON.parse(req.body)
    );
    res.status(201).json(updatedCollections);
  }
}
