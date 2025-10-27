function flattenObject(obj, parentKey = '') {
    let result = {};

    for (const key in obj) {
        const newKey = parentKey ? `${parentKey}-${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            // Object.assign(result, flattenObject(obj[key], newKey));
            result = { ...result, ...flattenObject(obj[key], newKey) };
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}

// Example Usage:
const nestedObject = {
    name: "Alice",
    details: {
        age: 30,
        address: {
            street: "Main St",
            city: "Anytown"
        }
    },
    hobbies: ["reading", "hiking"]
};

const flattened = flattenObject(nestedObject);
console.log(flattened);
/* Expected Output:
{
  'name': 'Alice',
  'details.age': 30,
  'details.address.street': 'Main St',
  'details.address.city': 'Anytown',
  'hobbies': ['reading', 'hiking']
}
*/
