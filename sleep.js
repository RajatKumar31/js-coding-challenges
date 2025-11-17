/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
	return new Promise((resolve, reject) => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */








// const promise = new Promise(callback);
// promise.then((data) => console.log("data :", data))
// 	.catch((error) => console.log("error :", error))
//
// function callback(resolve, reject) {
// 	setTimeout(() => reject("rejected in one second"), 1000);
// }
