/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    
    let prev = null;
    let node = null;
    
    while(head) {
        const temp = head.next;
        let next = null;
        
        if(temp) next = temp.next;
        else {
            prev.next = head;
            break;
        }
        
        if(!node) node = temp;
        
        temp.next = head;
        head.next = null;
        head = next;
        
        if(prev) prev.next = temp;
        
        prev = temp.next;
    }
    
    return node;
};