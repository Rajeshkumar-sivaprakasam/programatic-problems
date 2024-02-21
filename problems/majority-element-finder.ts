// export function majorityElement(nums: number[]): number {
//     let map = new Map();

//     // iterating and counting number of occurance
//     for (let i = 0; i < nums.length; i++) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], 1);
//         } else {
//             map.set(nums[i], map.get(nums[i]) + 1);
//         }
//     }
//     let max = 0;
//     map.forEach((value, key) => {
//         // console.log('key:', key, 'value:', value, 'key', map);
//         if (value > max) {
//             max = value;
//         }
//     });
//     for (let i = 0; i < nums.length; i++) {
//         if (map.get(nums[i]) === max) {
//             return nums[i];
//         }
//     }
//     return 0;
// }

export function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}
