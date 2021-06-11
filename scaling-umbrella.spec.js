const scalingUmbrella = require('./scaling-umbrella');

describe("Test scaling umbrella", () => {
    it("traverses clockwise 3x3", () => {
        let array = [[1,2,3],
                     [4,5,6],
                     [7,8,9]];

        expect(scalingUmbrella.arrange(array)).toEqual([1,2,3,6,9,8,7,4,5]);
    });

    it("traverses clockwise 4x4", () => {
        let array = [[1,2,3,1],
                     [4,5,6,4],
                     [7,8,9,7],
                     [7,8,9,7]];

        expect(scalingUmbrella.arrange(array)).toEqual([1,2,3,1,4,7,7,9,8,7,7,4,5,6,9,8]);
    });
});