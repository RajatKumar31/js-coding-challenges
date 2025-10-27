/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */

function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    return new Promise((resolve, reject) => {
        let retryCount = 0;
        const callFetcher = () => {
            fetcher()
                .then((data) => resolve(data))
                .catch((error) => {
                    if (retryCount < maximumRetryCount) {
                        console.log(retryCount);
                        retryCount++;
                        callFetcher();
                    } else {
                        reject(error);
                    }
                })
        };
        callFetcher();
    });
}

const func = function () {
    return new Promise((resolve, reject) => reject("check"));
};

console.log(fetchWithAutoRetry(func, 9));
