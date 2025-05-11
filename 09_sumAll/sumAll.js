const sumAll = function(...args) {
    let total = 0;
    let min = args[0];
    let max = args[args.length-1];
    
    if (!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    } else if (min < 0 || max < 0){
        return "ERROR";
    } else if (min > max){
        let temp = min;
        min = max;
        max = temp;
    }
    
    for (let i = min; i<=max; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
