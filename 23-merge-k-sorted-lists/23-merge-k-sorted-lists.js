/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 1) return lists[0];
    const q = new MinPriorityQueue({ priority: (node) => node.val });

    for(let i = 0; i < lists.length; i++) {
        if(lists[i]) q.enqueue(lists[i]);
    }
    
    const head = new ListNode();
    let tail = head;
    
    while(q.size()) {
        const current = q.front().element;
        q.dequeue();

        tail.next = current;
        if(current.next) q.enqueue(current.next);
        
        tail = tail.next;
    }
    
    return head.next;
};