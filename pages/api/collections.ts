import type { NextApiRequest, NextApiResponse } from 'next';
import { collections } from '../../src/data/collections';
import type { CollectionCategory } from '@/data/types';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<CollectionCategory[]>
) {
  const collectionCategories = collections.map((collection) => ({
    id: collection.id,
    category_id: collection.category_id,
    category_name: collection.category_name,
  }));

  res.status(200).json(collectionCategories);
}
