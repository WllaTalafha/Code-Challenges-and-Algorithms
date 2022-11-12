// Add your whiteboard image here

Problem Domain

write a function that will take a string as a parameter and return the first repeated word in that string.

Edge Cases

no sppaces

Visualization

input: "ASAC is a department at LTUC. ASAC teaches programming in LTUC."
output: "ASAC"

Big O:

time : O(n)
space : O(1)

Algorithm:

create a HashTable class with set method to set the key value pairs
and firstReapetedWord to take a string as a parameter and return the first repeated word in that string

Code :

class HashTable {
  constructor () {
      this.storage = {};
      this.size = 0;
  }

  set ( key, value ) {
      if ( !this.storage[ key ] ) {
          this.storage[ key ] = { value: value };
          this.size++;
      }
  }

  firstRepeatedWord ( string ) {
      if (!string.includes(' ')) return 'No Repetition';
      let arr = string.split(' ');
      for (let i = 0; i < arr.length; i++) {
          if (this.storage[arr[i]]) {
              return arr[i];
          } else {
              this.set(arr[i], arr[i]);
          }
      }
      return 'No Repetition';
  }
}

module.exports = { HashTable };
