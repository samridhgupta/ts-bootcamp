export class CardSuit {
    private readonly name: string;
    private readonly value: number;
    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    isGreater(newSuit: CardSuit): boolean {
        return (this.value > newSuit.value);
    }

}

export const DIAMOND = new CardSuit("♢", 0);
export const SPADE = new CardSuit("♤", 1);
export const HEART = new CardSuit("♡", 2);
export const CLUB = new CardSuit("♧", 3);

