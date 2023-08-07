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
