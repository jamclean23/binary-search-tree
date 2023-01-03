// Node project exploring binary search tree operations



// FUNCTIONS----------------------------------------------------



// NODE FACTORY
// Inputs: value, left child, right child
// Outputs: an object containing these arguments

function createNode(value = null, left = null, right = null) {
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
            if (sortedArray.length === 1) {
                let root = createNode(sortedArray[0]);
                return root;
            }
    
            let middle = Math.floor(sortedArray.length / 2);
            let left = sortedArray.slice(0, middle);
            let right = sortedArray.slice(middle);
    
            let root = createNode(sortedArray[middle], sortedArrayToBalancedTree(left), 
                sortedArrayToBalancedTree(right));
            
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



//INIT-----------------------------------------------------------

const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let tree = createTree(unsortedArray);
console.log('BINARY TREE: ');
console.dir(tree, { depth: null });

//TESTING-------------------------------------------------------
T
// Insert Value

// Delete Value

// Find value

// Breadth-first operations

// In-order operations

// Pre-order operations

// Post-order operations

// Height function

// Depth function

// isBalanced() check if the tree is balanced

// rebalance() balances a tree 
