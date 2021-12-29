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
    
    let list = [];
    
    while(head) {
        list.push(head.val);
        head = head.next;
    }
    
    function makeTree(i, j) {
        if(i > j) return null;
        if(i === j) return new TreeNode(list[i]);
        
        const middle = Math.floor((i + j) / 2);
        const node = new TreeNode(list[middle]);

        node.left = makeTree(i, middle - 1);
        node.right = makeTree(middle + 1, j);
        
        return node;
    }
    
    return makeTree(0, list.length - 1);
};

















