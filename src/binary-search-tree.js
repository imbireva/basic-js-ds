const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree_root = null;
  }

  root() {
    return this.tree_root;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.tree_root) {
      this.tree_root = newNode;
    } else {
      addHelper(this.tree_root, newNode);
    }

    function addHelper(existingNode, newNode) {
      if (newNode.data < existingNode.data) {
        if (!existingNode.left) {
          existingNode.left = newNode;
        } else {
          addHelper(existingNode.left, newNode);
        }
      } 
      else {
        if (!existingNode.right) {
          existingNode.right = newNode;
        } else {
          addHelper(existingNode.right, newNode);
        }
      }
    }
  }

  has(data) {
    return hasHelper(this.tree_root, data);

    function hasHelper(currentNode, data) {
      if (currentNode) {
        if (currentNode.data === data) {
          return true;
        } 
        else if (data < currentNode.data) {
          return hasHelper(currentNode.left, data);
        } 
        else if (data > currentNode.data) {
          return hasHelper(currentNode.right, data);
        }
      } 
      else {
        return false;
      }
    } 
  }

  find(data) {
    if (this.has(data)) {
      return findHelper(this.tree_root, data);
      
      function findHelper(currentNode, data) {
        if (currentNode.data === data) {
          return currentNode;
        }
        else if (data < currentNode.data) {
          return findHelper(currentNode.left, data);
        }
        else if (data > currentNode.data) {
          return findHelper(currentNode.right, data);
        }
      }
    }
    else {
      return null;
    }
  }

  remove(data) {
    
  }

  min() {
    if (!this.tree_root) {
      return null;
    }
    else {
      let node = this.tree_root;
      let values = [];
      while (node) {
        values.push(node.data);
        node = node.left;
      }
      return values[values.length - 1];
    }
  }

  max() {
    if (!this.tree_root) {
      return null;
    }
    else {
      let node = this.tree_root;
      let values = [];
      while (node) {
        values.push(node.data);
        node = node.right;
      }
      return values[values.length - 1];
    }
  }
}

module.exports = {
  BinarySearchTree
};