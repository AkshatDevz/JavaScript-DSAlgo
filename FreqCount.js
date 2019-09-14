function frqCount(str){
    var freqCounter = {};

    for(let val of str){
        freqCounter[val] = (freqCounter[val]||0)+1;
    }
    return freqCounter;
}

frqCount([1,2,2,2,3,5,5,1]);