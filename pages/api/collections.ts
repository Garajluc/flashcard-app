import type { NextApiRequest, NextApiResponse } from 'next';
import type { CollectionsCategory } from '../../src/data/types';
import { collections } from '../../src/data/collections';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<CollectionsCategory>
) {
  const collectionCategories = collections.map((collection) => ({
    id: collection.id,
    category_id: collection.category_id,
    category_name: collection.category_name,
  }));

  res.status(200).json(collectionCategories);
}
