// ------- FlashCards ------- //
export type FlashCard = {
  question: string;
  answer: string;
};

export type FlashCardWithId = FlashCard & {
  id: string;
};

export type FlashCards = FlashCard[];
export type FlashCardsWithId = FlashCardWithId[];

// ------- Collections ------- //
export type Collection = {
  category_id: string;
  category_name: string;
  flashcards: FlashCards;
};

export type CollectionWithId = Collection & {
  id: string;
};

export type Collections = Collection[];
export type CollectionsWithId = CollectionWithId[];

export type CollectionsCategory = Omit<Collection, 'flashcards'>[];
