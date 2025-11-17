/*
class AsyncTaskQueue {
	constructor(concurrency) {
		// Initialize the queue with the specified concurrency limit
		this.queue = [];
	}
	queue(task) {
		// Add an async task to the queue
	}
}

const queue = new AsyncTaskQueue(2); // Allow up to 2 tasks to run concurrently
// Example async tasks
const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
const task2 = () => new Promise((resolve, reject) => setTimeout(() => reject("Task 2 failed"), 500));
const task3 = () => new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 200));
// Queue tasks
queue.queue(task1); // Starts immediately
queue.queue(task2); // Starts immediately (concurrency = 2)
queue.queue(task3); // Waits until one of the first two tasks completes
*/


class AsyncTaskQueue {
	constructor(concurrency) {
		this.concurrency = concurrency;     // Max number of concurrent tasks
		this.runningCount = 0;              // Currently running tasks
		this.taskQueue = [];                // Queue of pending tasks
	}

	queue(task) {
		return new Promise((resolve, reject) => {
			const runTask = async () => {
				this.runningCount++;
				try {
					const result = await task();
					resolve(result);
				} catch (error) {
					reject(error);
				} finally {
					this.runningCount--;
					this._runNext();  // After a task finishes, try to run the next one
				}
			};

			if (this.runningCount < this.concurrency) {
				runTask();
			} else {
				this.taskQueue.push(runTask);
			}
		});
	}

	_runNext() {
		if (this.taskQueue.length > 0 && this.runningCount < this.concurrency) {
			const nextTask = this.taskQueue.shift();
			nextTask();
		}
	}
}

const queue = new AsyncTaskQueue(2);

const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
const task2 = () => new Promise((resolve, reject) => setTimeout(() => reject("Task 2 failed"), 500));
const task3 = () => new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 200));

queue.queue(task1).then(console.log).catch(console.error);
queue.queue(task2).then(console.log).catch(console.error);
queue.queue(task3).then(console.log).catch(console.error);
