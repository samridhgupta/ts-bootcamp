import { CardSuit } from "./CardSuit";
export class Card {
    rank: CardRank;
    suit: CardSuit;

    constructor(rank: CardRank, suit: CardSuit) {
        this.rank = rank;
        this.suit = suit;
    }
    compare(newCard: Card): Card {
        return (newCard.rank > this.rank || newCard.suit.value > this.suit.value) ? newCard : this;

        // if (newCard.rank === this.rank) {
        //     return (newCard.suit.value > this.suit.value) ? newCard : this;
        // } else {
        //     return (newCard.rank > this.rank) ? newCard : this;
        // }
    }
}

export enum CardRank {
    TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE
}