/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

// Runtime: 64 ms, Beats 90.31% of JS users
// Memory: 47.06 mb, Beats 61.63% of JS users
var findItinerary = function(tickets) {
    const graph = {};
    
    for (const [src, dst] of tickets) {
        if (!graph[src]) graph[src] = [];
        graph[src].push(dst);
    }
    
    for (const key in graph) {
        graph[key].sort().reverse();
    }
    
    const itinerary = [];
    
    function dfs(airport) {
        while (graph[airport] && graph[airport].length > 0) {
            dfs(graph[airport].pop());
        }
        itinerary.push(airport);
    }
    
    dfs("JFK");
    
    return itinerary.reverse();
};
