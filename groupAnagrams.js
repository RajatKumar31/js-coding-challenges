function groupAnagrams(input) {
    const map = new Map();
    for (let word of input) {
        let sorted = word.split("").sort().join("");
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(word);
    }
    console.log("map : ", map);
    // console.log(map.values());
    return Array.from(map.values());
}

const input = ["tea", "teas", "eat"];
const output = groupAnagrams(input);
console.log(output);

function anagram(str1, str2) {
    const arr = [];
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        arr[str1[i]] = arr[str1[i]] ? arr[str1[i]] + 1 : 1;
    }
    console.log(arr);
    for (let i = 0; i < str2.length; i++) {
        arr[str2[i]] = arr[str2[i]] ? arr[str2[i]] - 1 : -1;
    }
    console.log(arr);
    for (let index in arr) {
        console.log("index : ", index);
        if (arr[index] !== 0) {
            return false;
        }
    }
    return true;
}

console.log(anagram("raaat", "rajat"));
