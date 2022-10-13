// Write your test here

const { Node, isSame } = require("./challenge02");

let p = null;
let pTwo = null;
let pThree = null;
let q = null;
let qTwo = null;
let qThree = null;
let p1 = null;
let p2 = null;
let p1Two = null;
let p2Two = null;
let t1 = null;
let t2 = null;
let t1One = null;
let t2One = null;
let t1TWo = null;
let t2Two = null;

describe("test challenge 02", () => {
    beforeAll(() => {
        p = new Node(1);
        pTwo = new Node(2);
        pThree = new Node(3);
        p.left = pTwo;
        p.right = pThree;
        q = new Node(1);
        qTwo = new Node(2);
        qThree = new Node(3);
        q.left = qTwo;
        q.right = qThree;

        p1 = new Node(1);
        p2 = new Node(1);
        p1Two = new Node(2);
        p2Two = new Node(2);
        p1.left = p1Two;
        p2.right = p2Two;

        t1 = new Node(1);
        t1TWo = new Node(2);
        t1One = new Node(1);
        t2 = new Node(1);
        t2One = new Node(1);
        t2Two = new Node(2);

        t1.left = t1TWo;
        t1.right = t1One;

        t2.left = t2One;
        t2.right = t2Two;

    });
    it("test example 1", () => {
        const checker = isSame(p, q);
        expect(checker).toBeTruthy();
    });
    it("test example 2", () => {
        const checker = isSame(p1, p2);
        expect(checker).toEqual(false);
    });
    it("test example 3", () => {
        const checker = isSame(t1, t2);
        expect(checker).toEqual(false);
    });
});