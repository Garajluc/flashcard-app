export type FlashCard = {
  id: number;
  category_id: string;
  question: string;
  answer: string;
};

export type FlashCards = FlashCard[];

export type Collection = {
  id: number;
  category_id: string;
  category_name: string;
  flashcards: FlashCards;
};

export type Collections = Collection[];

export type CollectionsCategory = Omit<Collection, 'flashcards'>[];
