/**
 * @param {number} capacity
 */

function Node(key, val) {
    this.val = val;
    this.key = key;
    this.prev = null;
    this.next = null;
}

var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.list = null;
    this.tail = null;
    this.count = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.map.get(key);
    const head = this.list;
    if(!node) return -1;
    
    if(node !== head) {
        const prev = node.prev;
        const next = node.next;
        
        if(prev) prev.next = next;
        if(next) next.prev = prev;
        
        if(node === this.tail) this.tail = next;
            
        head.next = node;
        node.prev = head;
        this.list = node;
    }
    
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const head = this.list;
    const node = this.map.get(key);
    
    if(!node) {
        this.count++;
        const newNode = new Node(key, value);
        if(head) head.next = newNode;
        newNode.prev = head;
        this.list = newNode;
        this.map.set(key, newNode);
        if(!this.tail) this.tail = newNode;
        
        if(this.count > this.capacity) {
            const tail = this.tail;
            const next = tail.next;
            next.prev = null;
            this.tail = next;
            this.map.delete(tail.key);
            this.count--;
        }
        
    } else {
        const prev = node.prev;
        const next = node.next;
        node.val = value;
                
        if(head !== node) {
            if(prev) prev.next = next;
            if(next) next.prev = prev;
            
            if(node === this.tail) this.tail = next;
            
            head.next = node;
            node.prev = head;
            this.list = node;
            
        }
        
    }
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */