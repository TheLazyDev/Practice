function getMean(arr){
    var sum = 0;

    arr.forEach((num)=>{
        sum += num;
    })

    return sum / arr.length
}

function getMedian(arr){

    arr.sort((a,b)=> a - b)

    var median;

    if(arr.length % 2 !== 0) {
        median = arr[Math.floor(arr.length / 2)]
    } else {
        var mid1 = arr[arr.length / 2 - 1];
        var mid2 = arr[arr.length / 2]

        median = (mid1 + mid2) / 2
    }

    return median;
}

function getMode(arr){
    var modeObj = {};

    arr.forEach((num)=>{
        if(!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    })

    var maxFrequency = 0;
    var modes = [];

    for(var num in modeObj) {
        if(modeObj[num] > maxFrequency){
            modes = [ num ];
            maxFrequency = modeObj[num];
        }
        else if(modeObj[num] === maxFrequency){
            modes.push(num)
        }
    }

    if(modes.length === Object.keys(modeObj).length) modes = [];


    return modes;
}


function meanMedianMode(arr){

    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    }
}



console.log(meanMedianMode([1,2,3,4,5,4,6,1]))