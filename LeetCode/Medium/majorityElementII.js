/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Runtime: 56 ms, Beats 73.02% of JS users
// Memory: 43.48 mb, Beats 58.10% of JS users
var majorityElement = function(nums) {
    let cnt1 = 0;
    let cnt2 = 0; // Initialize counters for two potential majority elements.
    let el1 = 0;
    let el2 = 0; // Initialize variables to store the two potential majority elements.

    // First pass to find potential majority elements.
    for (const num of nums) {
        if (cnt1 === 0 && num !== el2) {
            cnt1 = 1;
            el1 = num;
        } else if (cnt2 === 0 && num !== el1) {
            cnt2 = 1;
            el2 = num;
        } else if (el1 === num) {
            cnt1++;
        } else if (el2 === num) {
            cnt2++;
        } else {
            cnt1--;
            cnt2--;
        }
    }

    const ans = [];
    const n = Math.floor(nums.length / 3);
    cnt1 = 0;
    cnt2 = 0;

    // Second pass to count occurrences of the potential majority elements.
    for (const num of nums) {
        if (el1 === num) {
            cnt1++;
        } else if (el2 === num) {
            cnt2++;
        }
    }

    // Check if the counts of potential majority elements are greater than n/3 and add them to the result.
    if (cnt1 > n) {
        ans.push(el1);
    }
    if (cnt2 > n) {
        ans.push(el2);
    }

    return ans;
};
