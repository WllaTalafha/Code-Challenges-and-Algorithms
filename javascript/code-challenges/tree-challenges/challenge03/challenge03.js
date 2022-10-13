// Write here the code challenge solution
"use strict";

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const constructBinaryTree = (nums) => {
    if (nums == null || !nums.length) {
        return null;
    }

    let mid = Math.floor(nums.length / 2);
    const node = new Node(nums[mid]);
    node.left = constructBinaryTree(nums.slice(0, mid));
    node.right = constructBinaryTree(nums.slice(mid + 1, nums.length));
    return node;
};

module.exports = {
    constructBinaryTree,
};