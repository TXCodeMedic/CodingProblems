/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// First Attempt - Make two linked lists and then join at the end
// Runtime: 61 ms, beats 55.74 % of JS users
// Memory: 43.46 mb, Beats 82.17% of JS users
var partition = function(head, x) {
    let lDummy = new ListNode();
    let rDummy = new ListNode();
    let lTail = lDummy;
    let rTail = rDummy;

    while(head !== null) {
        if (head.val < x) {
            lTail.next = head;
            lTail = lTail.next;
        } else {
            rTail.next = head;
            rTail = rTail.next;
        }
        head = head.next;
    }
    rTail.next = null;
    lTail.next = rDummy.next;

    return lDummy.next;
};
