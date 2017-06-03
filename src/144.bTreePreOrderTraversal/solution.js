/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/binary-tree-preorder-traversal/
    Given a binary tree, return the preorder traversal of its nodes' values.

 * Example 1:
	    1
	    \
	     2
	    /
	   3
	return [1,2,3]

 * @param {TreeNode} root
 * @return {number[]}

 * Analysis: In theory, preorder should be DFS, so we can try that.

************************************************************************************************************************/

import { TreeNode, bTreePreOrderTraversalFn } from "../_.util/binaryTree";

export const bTreePreOrderTraversal = {};

/**
 * Solution 1: use dfs
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreePreOrderTraversal.dfs = bTreePreOrderTraversalFn;

/**
 * Solution 2: use iterative
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreePreOrderTraversal.iterative = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    let result = [],
        _stack = [],
        curNode = root,
        newNode;

    while (isNode(curNode) || _stack.length > 0) {
        if (isNode(curNode)) {
            _stack.push(curNode);
            result.push(curNode.val);
            curNode = curNode.left;
        } else {
            // process a node in stack
            newNode = _stack.pop();
            curNode = newNode.right;
        }
    }

    return result;
};


/************************************************************************************************************************

 * Lessons:
   1. preorder is basically dfs, and dfs is recursion.

************************************************************************************************************************/