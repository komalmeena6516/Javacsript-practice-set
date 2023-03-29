function mostFrequent(arr, n) {
 
    let maxcount = 0;
    arr = arr.sort((a, b)=>a-b);
    let element_having_max_freq;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j])
                count++;
        }
 
        if (count > maxcount) {
            maxcount = count;
            element_having_max_freq = arr[i];
        }
    }
 
    return element_having_max_freq;
}
 
// Driver Code
 
let arr = [40, 50, 50, 30, 40, 50, 30, 30];
let n = arr.length;
console.log(mostFrequent(arr, n));
