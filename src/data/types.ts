export type FlashCard = {
  id: string;
  question: string;
  answer: string;
};

export type FlashCards = FlashCard[];

export type Collection = {
  id: string;
  category_id: string;
  category_name: string;
  flashcards: FlashCards;
};

export type Collections = Collection[];

export type CollectionsCategory = Omit<Collection, 'flashcards'>[];

export type FlashCardRequestBody = Omit<FlashCard, 'id'>;
export type CollectionRequestBody = Omit<Collection, 'id' | 'flashcards'> & {
  flashcards: FlashCardRequestBody[];
};
