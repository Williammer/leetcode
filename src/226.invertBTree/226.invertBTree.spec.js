import { arrayToBinaryTree, binaryTreeToArray } from "../_.general/binaryTree";
import * as invertBTree from "./226.invertBTree";

describe("# Problem 226 - Invert a binary tree.", () => {
  describe("Solution 1: invert from top to bottom by bfs.", () => {
    it("[] --> []", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.bfs(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([]);
    });

    it("[1] --> [1]", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.bfs(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([1]);
    });

    it("[1, null, null, 1, 2, 3, 4] --> [1]", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.bfs(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([1]);
    });

    it("[1, 2, 3, null, 4, 5] --> [1, 3, 2, null, 5, 4]", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.bfs(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([1, 3, 2, null, 5, 4]);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] --> [1, 3, 2, 6, 5, 4, null, null, null, null, null, null, 7]", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.bfs(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([1, 3, 2, 6, 5, 4, null, null, null, null, null, null, 7]);
    });
  });

  describe("Solution 2: recursively invert each sub-tree.", () => {
    it("[] --> []", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.recursion(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([]);
    });

    it("[1] --> [1]", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.recursion(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([1]);
    });

    it("[1, null, null, 1, 2, 3, 4] --> [1]", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.recursion(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([1]);
    });

    it("[1, 2, 3, null, 4, 5] --> [1, 3, 2, null, 5, 4]", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.recursion(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([1, 3, 2, null, 5, 4]);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] --> [1, 3, 2, 6, 5, 4, null, null, null, null, null, null, 7]", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = invertBTree.recursion(tree);
      const resultArray = binaryTreeToArray(result);

      expect(resultArray).toEqual([1, 3, 2, 6, 5, 4, null, null, null, null, null, null, 7]);
    });
  });
});
