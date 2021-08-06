import { CardSuit } from "./CardSuit";
export class Card {
    private readonly rank: CardRank;
    private readonly suit: CardSuit;

    constructor(rank: CardRank, suit: CardSuit) {
        this.rank = rank;
        this.suit = suit;
    }
    compare(newCard: Card): Card {
        return (newCard.rank > this.rank
            || newCard.suit.isGreater(this.suit))
            ? newCard : this;
    }
}

export enum CardRank {
    TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE
}