function snakeToCamelCase(str) {
	let ans = str
		.split("_")
		.map((elem, index) => index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1))
		.join("");

	return ans;
}

function camelToSnakeCase(str) {
	let ans = str
		.split("")
		.map((elem) => (elem === elem.toUpperCase() && elem !== elem.toLowerCase()) ? "_" + elem.toLowerCase() : elem)
		.join("");

	return ans;
}

// console.log(snakeToCamelCase("rajat_kumar_software_developer"));
console.log(camelToSnakeCase("rajatKumarSoftwareDeveloper"));
