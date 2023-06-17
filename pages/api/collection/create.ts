import type { NextApiRequest, NextApiResponse } from 'next';
import { collections } from '@/data/collections';
import { updateCollections } from '@/api/collection/CollectionService';
import type { Collections } from '@/data/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Collections>
) {
  if (req.method == 'POST') {
    // This is a mock implementation of API call
    // If we would have implemented a DB connection, we would interact with DB data instead of local collections data
    const updatedCollections = updateCollections(
      collections,
      JSON.parse(req.body)
    );
    res.status(201).json(updatedCollections);
  }
}
