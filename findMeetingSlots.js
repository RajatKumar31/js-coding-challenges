// type Interval = [number, number]

/**
 * @param {Interval[][]} schedules
 * @return {Interval[]}
 */
function findMeetingSlots(schedules) {
	const slots = [];
	slots.length = 24;
	for (let i = 0; i < schedules.length; i++) {
		for (let j = 0; j < schedules[i].length; j++) {
			const meetingSlot = schedules[i][j];
			let startTime = meetingSlot[0];
			let endTime = meetingSlot[1];
			for (let k = startTime; k < endTime; k++) {
				if (slots[k]) {
					slots[k] = slots[k] + 1;
				} else {
					slots[k] = 1;
				}
			}
		}
	}
	let ans = [];
	let i = 0;
	while (i < slots.length) {
		if (!slots[i]) {
			let slot = [];
			slot[0] = i;
			while (i < slots.length && !slots[i]) {
				i++;
			}
			slot[1] = i;
			ans.push(slot);
		}
		i++;
	}
	return ans;
}

const schedules = [
	[[13, 15], [11, 12], [10, 13]], //schedule for member 1
	[[8, 9]], // schedule for member 2
	[[13, 18]] // schedule for member 3
];
console.log(findMeetingSlots(schedules));

/*
[[0, 8], [9, 10], [18, 24]]
*/
