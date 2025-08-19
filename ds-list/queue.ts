export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, first one in is dequeued first.
   */
  enqueue(data: T, priority: number): void {
    const found = this.nodes.findIndex((n) => n.priority < priority);
    if (found < 0) {
      this.nodes.push({ data, priority });
    } else {
      this.nodes.splice(found, 0, { data, priority });
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    if (this.nodes.length <= 0) return undefined;
    const sorted = this.nodes.sort((a, b) => b.priority - a.priority);
    const removed = sorted.shift();
    return removed?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    if (this.nodes.length <= 0) return undefined;
    let max = 0;
    this.nodes.forEach((n) => {
      if (n.priority > max) max = n.priority;
    });
    const found = this.nodes.findIndex((n) => n.priority === max);
    const peekaboo = this.nodes[found];
    return peekaboo.data;
  }
}
