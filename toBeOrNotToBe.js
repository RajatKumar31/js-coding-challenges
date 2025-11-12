/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
	return {
		toBe: function(val) {
			if (Object.is(val, input)) {
				return true;
			} else {
				throw new Error("Not equal");
			}
		},
		not: {
			toBe: function(val) {
				if (!Object.is(val, input)) {
					return true;
				} else {
					throw new Error("Equal");
				}
			}
		}
	}
}

// console.log(NaN === NaN);
console.log(Object.is(0, -0));
console.log(Object.is(NaN, -NaN));
