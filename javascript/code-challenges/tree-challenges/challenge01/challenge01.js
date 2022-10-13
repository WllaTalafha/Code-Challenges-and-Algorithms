// Write here the code challenge solution
'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function constructTree(preorder, inorder) {

    if (!preorder.length || !inorder.length) return null;
    // create the first node
    let root = new Node(preorder[0]);
    //select the mid to slice it
    let mid = inorder.indexOf(preorder[0]);
    root.left = constructTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = constructTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
}
module.exports = {
    constructTree,
    Node
}
