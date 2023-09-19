/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 51 ms, Beats 99.91% of JS users.
// Memory: 50.19 mb, Beats 50.19% of JS users.
var findDuplicate = function(nums) {
    let [slow, fast] = [0,0];
    let check = 0;
        
    while( true ){
        slow = nums[ slow ];
        fast = nums[ nums[ fast ] ];
        
        if( slow === fast ){
            break;
        }
    }

    while( true ){
        
        slow = nums[ slow ];
        check = nums[ check ];
        
        if( slow === check ){
            break;
        }
    }
    
    return check;
};
