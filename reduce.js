function extractValue(arr, key) {
    return arr.reduce(function(accum, next){
        accum.push(next[key]);
        return accum;
    },[])
}



function vowelCount(str) {
    const vowels = 'aeiou';
return str.split('').reduce(function(accum, next){
    let lowerCase = next.toLowerCase();
    if(vowels.indexOf(lowerCase)!== -1){
        if(accum[lowerCase]){
            accum[lowerCase]++;
        }
        else{
            accum[lowerCase] = 1;
        }
    }
      return accum;  
        
    },{})

}


function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, next, ind){
        accum[ind][key] = value
        return accum;
    },arr)
}




function partition(arr, callback) {
    return arr.reduce(function(accum, next){
        if(callback(next)){
          accum[0].push(next);
        }
        else{
          accum[1].push(next);
        }
        return accum;
    },[[],[]]);
}
