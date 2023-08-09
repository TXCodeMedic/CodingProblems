/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// First Attempt:
// Runtime: 52 ms, Beats 96.25% of JS users
// Memory: 44.13 mb, Beats 48.57% of JS users
var mergeTwoLists = function(list1, list2) {
    var dummy = new ListNode();
    var tail = dummy;

    while (list1 && list2 !== null) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    
    }
    if (list1) {
        tail.next = list1;
    }
    else if (list2) {
        tail.next = list2;
    }
    return dummy.next;
};
