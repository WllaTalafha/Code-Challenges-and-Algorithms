// Write your test here
'use strict';

const { constructBinaryTree } = require('./challenge03');

describe('test challenge03', () => {




    it('test example 01', () => {
        let nums = [0, -3, -10, 5, 9];
        const node = constructBinaryTree(nums);
        expect(typeof node).toBe('object');
    });
    it('test example 02', () => {
        let nums = [3, 1];
        const node = constructBinaryTree(nums);
        expect(typeof node).toBe('object');
    });
})