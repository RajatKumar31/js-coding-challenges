function undefinedToNull(arg) {
    if (arg === undefined) {
        return null;
    } else if (Array.isArray(arg)) {
        return arg.map(undefinedToNull);
    } else if (Object.prototype.toString.call(arg) === "[object Object]") {
        let keys = Object.keys(arg);
        return keys.reduce((result, current) => {
            result[current] =
                arg[current] === undefined ? null : undefinedToNull(arg[current]);
            return result;
        }, {});
    }
    return arg;
}

console.log(undefinedToNull({ a: undefined, b: "BFE.dev" }));
// {a: null, b: 'BFE.dev'}
console.log(undefinedToNull({ a: ["BFE.dev", undefined, "bigfrontend.dev"] }));
// {a: ['BFE.dev', null, 'bigfrontend.dev']}
