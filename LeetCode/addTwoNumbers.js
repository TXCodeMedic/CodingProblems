/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// First Attempt -- FAILED (1565/1568) testcases passed
// If l1 or l2 is too large, adding numbers together in this fashion will result in a sum using scientific notation
// which will not allow the linked list to be created correctly
var addTwoNumbers = function(l1, l2) {
    var sum1 = ``
    var sum2 = ``

    while (l1) {
        sum1 += l1.val.toString()
        l1 = l1.next
    }
    console.log(sum1)
    while (l2) {
        sum2 += l2.val.toString()
        l2 = l2.next
    }
    console.log(sum2)

    var sum = parseInt(sum1.split("").reverse().join("")) + parseInt(sum2.split("").reverse().join(""))
    console.log(sum)
    sum = sum.toString().split("").reverse()

    var dummy = new ListNode()
    var cur = dummy

    for (let i = 0; i < sum.length; i++){
        newNode = new ListNode()
        newNode.val = parseInt(sum[i])
        cur.next = newNode
        cur = newNode
    }
    return dummy.next
};

// Second Attempt
// Runtime: 76ms, Beats 98.36% of JS users
// Memory: 47.14 mb, Beats 74.88% of JS users
var addTwoNumbers = function(l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while(l1 !== null || l2 !== null || sum > 0){
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    head.val = sum;
              
    if (l1 !== null || l2 !== null || carry > 0) {
      head.next = new ListNode(carry);
      head = head.next;
    }

    sum = carry;
    carry = 0;
  }
return List;
};
