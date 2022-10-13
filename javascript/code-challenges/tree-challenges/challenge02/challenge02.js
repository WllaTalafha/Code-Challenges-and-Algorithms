// Write here the code challenge solution

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}



function isSame(tree1, tree2) {
    let queue = [];
    let queue2 = [];
    queue.push(tree1);
    queue2.push(tree2);
    if (tree1.left && tree2.left) {
        while (queue.length !== 0 && queue2.length !== 0) {
            console.log('queue 1', queue);
            console.log('queue 2', queue2);
            let popped = queue.pop();
            console.log('popppped value :', popped);
            let popped2 = queue2.pop();
            console.log('popppped222 value :', popped2);
            if (popped.value !== popped2.value) {
                return false;
            }
            if (popped.left) {
                console.log(1);
                queue.push(popped.left);
            }
            if (popped2.left) {
                console.log(2);
                queue2.push(popped2.left);
            }
            if (popped.right) {
                console.log(1);
                queue.push(popped.right);
            }
            if (popped2.right) {
                console.log(2);
                queue2.push(popped2.right);
            }
        }
    } else {
        return false;
    }
    return true;
}


module.exports = {
    Node,
    isSame
};