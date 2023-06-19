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
export type CollectionCategory = {
  category_id: string;
  category_name: string;
};
export type Collection = CollectionCategory & {
  flashcards: FlashCards;
};

export type CollectionWithId = CollectionCategory & {
  id: string;
  flashcards: FlashCardsWithId;
};

export type Collections = Collection[];
export type CollectionsWithId = CollectionWithId[];
