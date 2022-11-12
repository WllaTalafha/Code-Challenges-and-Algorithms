// Add your whiteboard image here

Problem Domain 

 Write a function that takes a Binary Search tree and an integer as a parameter. Return True if Binary search tree has two elements that their summation is the given integer

 
Algorithm

create a Node class
create a Tree class 
create a hash table with get-method to get thhe values of given keys and checkSum-method to return true if Binary search tree has two elements that their summation is the given integer

Edge Cases 

null values
missing left or right

Big O

time : O(1)
space : O(1)

Visualization :

input: [7,2,9,1,null,14] , k=3
output: true
                    7
                   / \
                   2  9
                  /\   \
                1   5   14

Code :

'use strict';

class Node {
    constructor ( value = null ) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor ( root ) {
        this.root = root || null;
    }
    preOrder () {
        let result = [];
        let loop = ( node ) => {
            if ( node && node.value ) {
                result.push( node.value );
                if ( node.left ) loop( node.left );
                if ( node.right ) loop( node.right );
            }
        };
        loop( this.root );
        return result;
    }
}

class HashTable {
    constructor ( size ) {
        this.size = size;
        this.storage = new Array( size );
    }

    set ( key, value ) {
        if ( !this.storage[ key ] ) this.storage[ key ] = [ value ];
        this.storage[ key ] = [ ...this.storage[ key ], value ];
    }

    checkSum ( tree, num ) {
        tree.preOrder().forEach( ( value ) => {
            tree.preOrder().forEach( ( value2 ) => {
                if ( value !== value2 ) this.set( value, value2 );
            } );
        } );
        return this.storage
            .map( ( _, idx ) =>
                this.storage[ idx ]?.find( ( value2 ) => idx + value2 === num && idx !== value2 )
            )
            .filter( ( value ) => value ).length ? true : false;
    }
}

module.exports = { Node, Tree, HashTable };
