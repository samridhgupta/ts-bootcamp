import { Card, CardRank } from "../src/PlayingCard/Card";
import { CLUB, DIAMOND, HEART, SPADE } from "../src/PlayingCard/CardSuit";



describe("Playing Card: Compare", () => {
    test("3 Diamond and 4 Diamond get =  4 Diamond", () => {
        expect(new Card(CardRank.THREE, DIAMOND)
            .compare(new Card(CardRank.FOUR, DIAMOND)))
            .toEqual(new Card(CardRank.FOUR, DIAMOND));
    });


    test("3 Club and 3 Diamond get =  3 Club", () => {
        expect(new Card(CardRank.THREE, CLUB)
            .compare(new Card(CardRank.THREE, DIAMOND)))
            .toEqual(new Card(CardRank.THREE, CLUB));
    });


    test("3 Heart and 3 Spade get =  3 Spade", () => {
        expect(new Card(CardRank.THREE, SPADE)
            .compare(new Card(CardRank.THREE, HEART)))
            .toEqual(new Card(CardRank.THREE, SPADE));
    });
});
