class TaskQueue {
	constructor(concurrency) {
		this.concurrency = concurrency;
		this.queue = [];
		this.runningTasks = 0;
	}

	async runTask(task) {
		if (this.runningTasks >= this.concurrency) {
			await new Promise((resolve) => this.queue.push(resolve));
		}
		this.runningTasks++;
		try {
			await task();
		} finally {
			this.runningTasks--;
			if (this.queue.length > 0) {
				this.queue.shift()();
			}
		}
	}

	async addTask(task) {
		return this.runTask(task);
	}
}

const queue = new TaskQueue(2);

const createTasks = (i) =>
	() => new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Task ${i} is finished`);
			resolve();
		}, 1000);
	});

for (let i = 1; i <= 5; i++) {
	console.log(i);
	queue.addTask(createTasks(i));
}
