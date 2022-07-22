var topKFrequent = function(nums, k) {
    let object ={};
    for(let num of nums){
        if(object[num]){
            object[num]++
        }else{
            object[num]=1
        }
        var ordered = Object.keys(object).sort((a,b)=>object[b]-object[a])
    }return ordered.slice(0,k)
};

console.log(topKFrequent([1,1,1,2,2,3],2))