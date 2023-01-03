// Node project exploring binary search tree operations



// FUNCTIONS----------------------------------------------------

// FIND

function find (value, tree) {
    let treeCopy = structuredClone(tree);
    return recurse(value, treeCopy.root);

    function recurse (value, tree) {
        if (tree === null) {
            return 'Not Found';
        }
        if (tree.value === value) {
            tree.left = null;
            tree.right = null;
            return tree;
        }
        if (value > tree.value) {
            console.log('recursing right');
            return recurse(value, tree.right);
        } else if (value < tree.value) {
            return recurse(value, tree.left);
        }
    }
}

// INSERT

function insert (value, tree) {

    tree.root = recurse(value, tree.root);
    return tree;

    function recurse (value, tree) {
        if (tree === null) {
            return createNode(value);
        }
        if (tree.value === value) {
            return createNode(value, tree.left, tree.right);
        }

        if (tree.value > value) {
            tree.left = recurse(value, tree.left);
            return tree;
        } else if (tree.value < value) {
            tree.right = recurse(value, tree.right);
            return tree
        }
    }
}

// REMOVE 

function remove (value, tree) {

    tree.root = recurse(value, tree.root);
    return tree;

    function recurse (value, tree) {
        if (tree === null) {
            return null;
        }
        
        if (value === tree.value) {
            if (tree.left === null && tree.right === null) {
                return null;
            }
            return {
                left: tree.left,
                right: tree.right
            }
        }

        tree.left = recurse(value, tree.left);
        tree.right = recurse(value, tree.right);
        return tree;
    }
}

// NODE FACTORY
// Inputs: value, left child, right child
// Outputs: an object containing these arguments

function createNode (value = null, left = null, right = null) {
    return {
        value: value,
        left: left,
        right: right
    }
}

// TREE FACTORY
// Inputs: an unsorted array
// Outputs: an object containing a balanced binary tree
function createTree(array) {
    let tree = {};
    tree.root = buildTree(array);
    return tree;

    // LOCALLY SCOPED FUNCTIONS

    function buildTree(array) {

        // sort the list and remove any duplicates with a merge sort
        let sortedArray = mergeSort(array);
    
        // recursively build the tree
        return sortedArrayToBalancedTree(sortedArray);
    
    
    
        //LOCALLY SCOPED FUNCTIONS
    
        function sortedArrayToBalancedTree (sortedArray) {
            let middle = Math.floor(sortedArray.length / 2);
            let left = sortedArray.slice(0, middle);
            let right = sortedArray.slice(middle + 1);
            

            let root = createNode(sortedArray[middle]);
            
            if (left.length > 1) {
                root.left = sortedArrayToBalancedTree(left);
            } else if (left.length === 1) {
                root.left = createNode(left[0]);
            } else {
                root.left = null;
            }
            if (right.length > 1) {
                root.right = sortedArrayToBalancedTree(right);
            } else if (right.length === 1){
                root.right = createNode(right[0]);
            } else {
                root.right = null;
            }
            
            return root;
        }
    
        function mergeSort (array) {
            if (array.length <= 1) {
                return array;
            }
    
            let middle = Math.floor(array.length / 2);
            let left = array.slice(0, middle);
            let right = array.slice(middle);
    
            return merge(mergeSort(left), mergeSort(right));
    
            function merge (left, right, tempArray = []) {
                while(left.length > 0 && right.length > 0) {
                    if (left[0] < right[0]) {
                        tempArray.push(left.shift());
                    } else if (right[0] < left[0]) {
                        tempArray.push(right.shift());
                    } else if (right[0] === left[0]){
                        tempArray.push(left.shift());
                        right.shift();
                    }
                }
                return [...tempArray, ...left, ...right];
            }
        }
    }
}

// TEST
function test(testParameter) {
    if (testParameter) {
        console.log('\x1b[1;32m%s\x1b[0m', 'PASS');
    } else {
        console.log('\x1b[1;31m%s\x1b[0m', 'FAIL');
    }
}

//INIT-----------------------------------------------------------

const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let tree = createTree(unsortedArray);
console.log('\x1b[1;34m%s\x1b[0m', '\n--------INITIAL BINARY TREE-------- ');
console.dir(tree, { depth: null });

//TESTING-------------------------------------------------------
console.log('\x1b[1;34m%s\x1b[0m', '\n---------TESTS---------\n');
// Insert Value
console.log('Inserts 0');
tree = insert(0, tree);
test(tree.root.left.left.left.left.value === 0);
console.log('-');

// Remove Value
console.log('Removes 0');
tree = remove(0, tree);
test(tree.root.left.left.left.left === null);
console.log('-');

// Find value
console.log('Returns 6345');
console.log(find(67, tree));
console.log('-');

// Breadth-first operations

// In-order operations

// Pre-order operations

// Post-order operations

// Height function

// Depth function

// isBalanced() check if the tree is balanced

// rebalance() balances a tree 

// End result
console.log('\x1b[1;34m%s\x1b[0m', '\n--------END RESULT--------');
console.dir(tree, { depth: null });
