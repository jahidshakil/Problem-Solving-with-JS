// longest substring without repeating charecter
const longestSubstring = (str) => { 
    let i = 0;
    let j = 0;
    let max = 0;
    let set = {};
    if (str.length === 0) return 0;
    for (let i = 0; i < str.length; i++){
        let rightChar = str[i];
        set[rightChar] = set[rightChar] + 1 || 1;
        while (set[rightChar] > 1) {
            let leftChar = str[j];
            if (set[leftChar] > 1) {
                set[leftChar]--;
            } else {
                delete set[leftChar];
            }
            j++
        }
        max = Math.max(max, (i - j) + 1);

    }
    return max;
}

    console.log(longestSubstring("abcdbk"));