// Node project exploring binary search tree operations



// FUNCTIONS----------------------------------------------------
// NODE FACTORY
// Inputs: value, left child, right child
// Outputs: an object containing these arguments

function createNode(value = null, leftChild = null, rightChild = null) {
    return {
        value: value,
        leftChild: leftChild,
        rightChild: rightChild
    }
}

// TREE FACTORY
// Inputs: an unsorted array
// Outputs: an object containing a balanced binary tree

function buildTree(array) {
    // sort the list and remove any duplicates with a merge sort
    // recursively build the tree
        // find the middle element and assign it as the root
        // left is the array up to the middle
        // right is the array after the middle
        // root.leftChild is recurse(left)
        // root.rightChild is recurse(right)
        // return the root
    //return the result of the recursion
}


//INIT-----------------------------------------------------------

const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// call buildTree() with array
