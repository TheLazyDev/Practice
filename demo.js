// // // Constant runtime - Big O Notation:  "O (1)"
// // function log(array) {
// //   console.log(array[0]);
// //   console.log(array[1]);
// //  }
  
// //  log([1, 2, 3, 4]);
// //  log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  
// //  // Linear runtime - Big O Notation:  "O (n)"
// //  function logAll(array) {
// //   for (var i = 0; i < array.length; i++) {
// //     console.log(array[i]); 
// //   }
// //  }
  
// //  logAll([1, 2, 3, 4, 5]);
// //  logAll([1, 2, 3, 4, 5, 6]);
// //  logAll([1, 2, 3, 4, 5, 6, 7]);
  
  
//  // Exponential runtime - Big O Notation: "O (n^2)"
//  function addAndLog(array) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       console.log(array[i] + array[j]);
//     }
//   } 
//  }
  
// //  addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
// //  addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
// //  addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out
  
  
//  // Logarithmic runtime - Big O Notation: O (log n)
//  function binarySearch(array, key) {
//      var low = 0;
//      var high = array.length - 1;
//      var mid;
//      var element;
//      console.log(high,array.length)
//      while (low <= high) {
//          mid = Math.floor((low + high) / 2, 10);
//          element = array[mid];

//          console.log(element)
//          if (element < key) {
//              low = mid + 1;
//          } else if (element > key) {
//              high = mid - 1;
//          } else {
//              return mid;
//          }
//      }
//      return -1;
//  }


// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],6))


function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }
   
  function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
   
  HashTable.prototype.hash = function(key) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;
  };
   
  HashTable.prototype.insert = function(key, value) {
    var index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    }
    else if (this.buckets[index].key === key) {
      this.buckets[index].value = value;
    }
    else {
      var currentNode = this.buckets[index];
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
    }
  };
   
  HashTable.prototype.get = function(key) {
    var index = this.hash(key);
    if (!this.buckets[index]) return null;
    else {
      var currentNode = this.buckets[index];
      while (currentNode) {
        if (currentNode.key === key) return currentNode.value;
        currentNode = currentNode.next;
      }
      return null;
    }
  };
   
  HashTable.prototype.retrieveAll = function() {
    var allNodes = [];
    for (var i = 0; i < this.numBuckets; i++) {
      var currentNode = this.buckets[i];
      while(currentNode) {
        allNodes.push(currentNode);
        currentNode = currentNode.next;
      }
    }
    return allNodes;
  };
   
  var myHT = new HashTable(30);
   
  myHT.insert('Dean', 'dean@gmail.com');
  myHT.insert('Megan', 'megan@gmail.com');
  myHT.insert('Dane', 'dane@yahoo.com');
  myHT.insert('Dean', 'deanmachine@gmail.com');
  myHT.insert('Megan', 'megansmith@gmail.com');
  myHT.insert('Dane', 'dane1010@outlook.com');

  console.log(myHT.retrieveAll());