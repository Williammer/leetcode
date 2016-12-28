import { arrayToBinaryTree, binaryTreeToArray } from "../../src/_.util/binaryTree";
import { serializeBT } from "../../src/297.serializeBT/solution";

describe("# Problem 297 - serialize/deserialize BinaryTree.", () => {

    describe("Solution 1: Just convert it to array", () => {
        it("[]", () => {
            const array = [];
            const tree = arrayToBinaryTree(array);

            const result = serializeBT.deserialize(serializeBT.serialize(tree));

            expect(binaryTreeToArray(result)).toEqual(array);
        });

        it("[1]", () => {
            const array = [1];
            const tree = arrayToBinaryTree(array);

            const result = serializeBT.deserialize(serializeBT.serialize(tree));

            expect(binaryTreeToArray(result)).toEqual(array);
        });

        it("[3, null, 5, 4]", () => {
            const array = [3, null, 5, 4];
            const tree = arrayToBinaryTree(array);

            const result = serializeBT.deserialize(serializeBT.serialize(tree));

            expect(binaryTreeToArray(result)).toEqual(array);
        });

        it("[6, null, 8, 7, 9]", () => {
            const array = [6, null, 8, 7, 9];
            const tree = arrayToBinaryTree(array);

            const result = serializeBT.deserialize(serializeBT.serialize(tree));

            expect(binaryTreeToArray(result)).toEqual(array);
        });

        it("[6, 2, 9, null, 4, 7, 10, 3]", () => {
            const array = [6, 2, 9, null, 4, 7, 10, 3];
            const tree = arrayToBinaryTree(array);

            const result = serializeBT.deserialize(serializeBT.serialize(tree));

            expect(binaryTreeToArray(result)).toEqual(array);
        });
    });

});
