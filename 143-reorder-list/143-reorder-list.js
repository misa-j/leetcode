/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let p1 = head, p2 = head;
    let prev = null;
    let len = 0;
    
    while(p1) {
        p1 = p1.next;
        len++;
    }
    
    p1 = head;
    
    while(p2 && p2.next) {
        p2 = p2.next.next;
        const next = p1.next;
        p1.next = prev;
        prev = p1;
        p1 = next;
    }
    
    let prevNode = null;
    p2 = p1;
    p1 = prev;
    
    if((len & 1) === 1) {
        prevNode = p2;
        const temp = p2.next;
        p2.next = null;
        p2 = temp;
    }
    
    while(p1 && p2) {
        const next1 = p1.next;
        const next2 = p2.next;
        p1.next = p2;
        p2.next = prevNode;
        prevNode = p1;
        p1 = next1;
        p2 = next2;
    }
    
    return prevNode;
};