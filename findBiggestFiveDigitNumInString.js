/**
 * Created by D on 3/4/2015.
 */
/*
 In the following 6 digit number:

 283910
 91 is the greatest sequence of 2 digits.

 Complete the solution so that it returns the largest five digit number found within within the number given.. The
 number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as
 large as 1000 digits.
 */

function solution(digits){
    var highNumber; //highest number found
    var indexArray=[]; //array of places where highNumber found
    for (var i=9; i >=0;){//get top number and all places where its found
        var tempIndex = digits.indexOf(i, indexArray[indexArray.length -1] + 1);//NaN @ 0 but w/e
        if (tempIndex != -1) {
            highNumber = i;
            indexArray.push(tempIndex);
        } else if (highNumber != undefined && tempIndex === -1){//if high number found prev. break loop
            i = i - 1;
            break; //exit loop as we have found the top #
        } else{i = i - 1;}
    }

    //indexArray is an array of indexes where high numbers found
    function getHighNumber(indexArray, highNumberStr, numDigits){
        var currentHigh = '0';
        var currentIndexes = [];
        for (var j=0, len=indexArray.length; j<len; j++) {
            var startingIndex = indexArray[j] + 1;
            var nextDigit = digits.substr(startingIndex, 1);
            if (nextDigit > currentHigh) {
                currentHigh = nextDigit;
                currentIndexes = [startingIndex];
            } else if (nextDigit === currentHigh) {
                currentIndexes.push(startingIndex);
            }
        }
        var newHighNumberStr = highNumberStr + currentHigh;
        if (newHighNumberStr.length === numDigits){return +newHighNumberStr;}
        //if numberStr is not as long as user requested, recursively call until it is the proper length w/ new data
        else {return getHighNumber(currentIndexes, newHighNumberStr, numDigits);}
    }

    return getHighNumber(indexArray, highNumber, 5);
}