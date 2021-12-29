/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    
    function find(head) {
        let p1 = head;
        let prev = head;
        let p2 = head;

        while(p2 && p2.next) {
            prev = p1;
            p1 = p1.next;
            p2 = p2.next.next;
        }

        prev.next = null;
        
        return p1;
    }
    
    function makeTree(head) {
        if(!head) return null;
        
        const middle = find(head);
        const node = new TreeNode(middle.val);

        if(head !== middle) node.left = makeTree(head);
        node.right = makeTree(middle.next);
        
        return node;
    }
    
    return makeTree(head);
};

















