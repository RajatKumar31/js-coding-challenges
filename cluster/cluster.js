import cluster from "cluster";
import os from "os";
import express from "express";

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
	console.log(`Master process ${process.pid} is running`);

	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`Worker process ${worker.process.pid} died. Restarting...`);
		cluster.fork();
	});
} else {
	const app = express();

	app.get("/heavy", async (req, res) => {
		let total = 0;
		for (let i = 0; i < 50_000_000; i++) {
			total++;
		}
		res.send(`The result of the CPU intensive task is ${total}\n`);
	});

	const server = app.listen(3000, () => {
		console.log(`Worker process ${process.pid} is listening on port 3000`);
	});
}
