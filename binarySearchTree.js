
// function factorial(num){
//         if(num === 2){
//             return num;
//         } else {
//             return num * factorial(num - 1 );
//         }
// }



// console.log(factorial(4));


function BST(value){
    this.value = value;;
    this.left = null;
    this.right = null;
}




BST.prototype.insert = function(value){
    if(value <= this.value){
        if(!this.left) this.left = new BST(value);
        else this.left.insert(value)
    } else if(value > this.value){
        if(!this.right) this.right = new BST(value);
        else this.right.insert(value)
    }
}



BST.prototype.contains = function(value){
    if(value === this.value) return true;
    else if(value < this.value) {
        if(!this.left) return false;
        else return this.left.contains(value)
    } else if(value > this.value){
        if(!this.right) return false;
        else return this.right.contains(value)
    }
}



BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
    if(order === "pre-order") iteratorFunc(this.value);
    if(this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if(order === "in-order") iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if(order === "post-order") iteratorFunc(this.value);
}


BST.prototype.breathFirstTraversal = function(iteratorFunc){
        var queue = [this];

    while(queue.length){
        var treeNode = queue.shift()
        iteratorFunc(treeNode);
        if(treeNode.left) queue.push(treeNode.left);
        if(treeNode.right) queue.push(treeNode.right)
    }

}


BST.prototype.getMinVal = function(){
    if(this.left) return this.left.getMinVal()
    else return this.value;
}


BST.prototype.getMaxVal = function(){
    if(this.right) return this.right.getMaxVal()
    else return this.value;
}

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(80);
bst.insert(90);


function log(node){
    console.log(node.value);
}
// bts.depthFirstTraversal(log, "post-order")

// bts.breathFirstTraversal(log)
// console.log(bts.right);


console.log("MIN: ",bst.getMinVal())
console.log("MAX: ",bst.getMaxVal())