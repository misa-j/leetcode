
var MedianFinder = function() {
    this.left = new MaxPriorityQueue();
    this.right = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.left.size() === 0) this.left.enqueue(num);
    else {
        const n = this.left.front().element;
        if(n >= num) this.left.enqueue(num);
        else this.right.enqueue(num);
        
        if(this.left.size() - this.right.size() === 2) {
            const current = this.left.dequeue().element;
            this.right.enqueue(current);
        } else if(this.right.size() - this.left.size() === 2) {
            const current = this.right.dequeue().element;
            this.left.enqueue(current);
        }
        
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.left.size() === this.right.size()) return (this.left.front().element + this.right.front().element) / 2;
    else if(this.left.size() > this.right.size()) return this.left.front().element;
    else return this.right.front().element;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */