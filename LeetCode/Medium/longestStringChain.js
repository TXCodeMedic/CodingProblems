/**
 * @param {string[]} words
 * @return {number}
 */

//DP
// Runtime: 146 ms, Beats 54.54% of JS users
// Memory: 27.27% mb, Beats 25.45% of JS users
var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);
    const dp = {};
    let max_chain = 0;
    
    for (const word of words) {
        dp[word] = 1;
        for (let i = 0; i < word.length; i++) {
            const prev_word = word.slice(0, i) + word.slice(i + 1);
            if (prev_word in dp) {
                dp[word] = Math.max(dp[word], dp[prev_word] + 1);
            }
        }
        max_chain = Math.max(max_chain, dp[word]);
    }
    return max_chain;
};

// Study this solution 
// Runtime: 73 ms, Beats 100% of JS users
// Memory: 49.6 mb, Beats 47.27% of JS users
var longestStrChain = function(words) {
    let W = Array.from({length: 17}, _ => new Set())

    for (let i = 0; i < words.length; i++) { 
        W[words[i].length].add(words[i])
    }
    
    let dp = new Map(), best = 1

    for (let i = 16; i; i--) {
        if (!W[i-1].size) { continue; }

        for (let word of W[i]) {
            let wVal = dp.get(word) || 1

            for (let j = 0; j < word.length; j++) {
                let pred = word.slice(0,j) + word.slice(j+1)

                if (W[i-1].has(pred) && wVal >= (dp.get(pred) || 1)) {
                    dp.set(pred, wVal + 1)
                    best = Math.max(best, wVal + 1)
                }
            }
        }
    }
    return best
};
