const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let values = [];
  let list = l; // copy our list 'l' (to avoid 'l' mutation)

  while (list) {
    values.push(list.value); // push values to array 'values'
    list = list.next;
  }
  
  let lastValue = values[values.length - 1];
  let resultList = null; // should be null if last value in array = k 

  if (lastValue !== k) { // check last value and start to create result list
    resultList = {value: lastValue, next: null};
  }

  for (let i = values.length - 2; i >= 0; i--) { // start from the end of array
    if  (values[i] !== k) {
      resultList = {value: values[i], next: resultList};
    }
  }
  return resultList;
}

module.exports = {
  removeKFromList
};
