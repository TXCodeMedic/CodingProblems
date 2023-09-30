/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Runtime: 53 ms, Beats 99.14% of JS users
// Memory: 55.67 mb, Beats 34.38% of JS users
var find132pattern = function(nums) {
   const st = [];
   let cur_min = nums[0];
   
   for (let i = 1; i < nums.length; i++) {
        const n = nums[i];
        while (st.length && n >= st[st.length - 1][0]) {
            st.pop();
        }

        if (st.length && n > st[st.length - 1][1]) {
            return true;
        }

        st.push([n, cur_min]);
        cur_min = Math.min(cur_min, n);
    }

    return false;    
};
