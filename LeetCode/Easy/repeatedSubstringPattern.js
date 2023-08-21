/**
 * @param {string} s
 * @return {boolean}
 */
// proof:
/*
s = P * k = P...P, where P is pattern repeat k times.
s_fold = s[1:] + s[:-1]

s_fold
= (Head + P ...P) + (P...P + Tail) where Head is P without first character, and Tail is P without last char

s_fold
= (Head + P repeat(k-1) times) + (P repeat(k-1) times + Tail)
= Head + P repeat(2k-2) times + Tail
= Head + P * (2k-2) + Tail

If k = 1 which means:        s = P * k = P * 1 = P

String s has no actual repeated substring pattern
s_fold
= Head + P * 0 + Tail = Head + Tail
We cannot find s in s_fold

If k >= 2, which means s_fold = Head + P * (2k-2) + Tail = Head + P*k' + Tail, where k' >= k
String has repeated substring pattern P
Recall that s = P * k, we can find s in s_fold
*/

// Runtime: 57 ms, Beats 85.33% of JS users
// Memory: 44.10 mb, Beats 96.72% of JS users
var repeatedSubstringPattern = function(s) {
    let sFold = s.substr(1, s.length) + s.substr(0, s.length - 1);
    return sFold.indexOf(s) != -1;
};
