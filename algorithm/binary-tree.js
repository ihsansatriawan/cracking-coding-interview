/** 
Given a binary tree, get the average value at each level of the tree

Input:
    4
  /    \
 7      9 
/  \     \
10  2     6
     \
      6
     /
    2

output:
[4, 8, 6, 6, 2]
**/


const bst = {
  val: 4,
  left: {
    val: 7,
    left: {
      val: 10,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 6,
        left: {
          val: 2,
          left: null,
          right: null
        },
        right: null
      }
    }
  },
  right: {
    val: 9,
    left: null,
    right: {
      val: 6,
      left: null,
      rigth: null
    }
  }
};

function averageOfLevels(root) {

  let queue = [], res = [];
  queue.push([root, 0]);
  console.log('queue: ', queue);
  while(queue.length) {
    let [node, lvl] = queue.shift();
    console.log('node: ', node);
    console.log('lvl: ', lvl);

    if (node.left) {
      queue.push([node.left, lvl+1]);
    }

    if (node.right) {
      queue.push([node.right, lvl+1]);
    }

    if (!res[lvl]) {
      res[lvl] = [];
    }
    
    res[lvl].push(node.val);

  }
  console.log('res: ', res);

  return res.map(val => {
    
    let n = val.length;

    let sum = val.reduce((a, b) => a + b);

    return sum/n;
  });
  
};

console.log(averageOfLevels(bst));
