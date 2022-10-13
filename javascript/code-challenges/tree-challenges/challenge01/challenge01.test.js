// Write your test here
const {Node, constructTree} = require('./challenge01');

describe('testing trees', () => {
        it('Test example 1' , () => {
        const preorder = [3, 9, 20, 15, 7];
        const inorder = [9, 3, 15, 20, 7];
        const result = constructTree(preorder, inorder);
        expect(result).toBeInstanceOf(Node);
        expect(result.left.value).toEqual(9);
        expect(result.right.value).toEqual(20);
    });
    it('Test example 2' , () => {
        const preorder = [-1];
        const inorder = [-1];
        const result = constructTree(preorder, inorder);
        expect(result).toBeInstanceOf(Node);
        expect(result.left).toBeNull();
        expect(result.right).toBeNull();
    });
})
