/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */

// Runtime: 47 ms, Beats 97.98% of JS users
// Memory: 44.98 mb, beats 14.14% of JS users
var splitListToParts = function(head, k) {
    let length = 0, current = head, parts = [];

    while (current) {
        length++;
        current = current.next;
    }

    let base_size = Math.floor(length / k), extra = length % k;
    current = head;

    for (let i = 0; i < k; i++) {
        let part_size = base_size + (extra > 0 ? 1 : 0);
        let part_head = null, part_tail = null;

        for (let j = 0; j < part_size; j++) {
            if (!part_head) {
                part_head = part_tail = current;
            } else {
                part_tail.next = current;
                part_tail = part_tail.next;
            }

            if (current) {
                current = current.next;
            }
        }

        if (part_tail) {
            part_tail.next = null;
        }

        parts.push(part_head);
        extra = Math.max(extra - 1, 0);
    }

    return parts;
};
