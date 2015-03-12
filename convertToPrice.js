/* 5kyu
 Your objective is to add formatting to a plain number to display it as price.

 The function should return a string like this:

 var price = numberToPrice(13253.5123);
 console.log(price); // 13,253.51
 Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to
 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the
 result will always have 2 decimal characters, the function will also evaluate negative numbers.

 function should return a string 'NaN' if the input is not a valid number
 */
var numberToPrice = function(number) {
    if (isNaN(number) || number === '') return 'NaN';
    var str = number + '';
    var decimalIndex = str.indexOf('.');

    if (decimalIndex !== -1){ //if decimal in number
        var decimal = str.substr(decimalIndex, 3),
            int = str.slice(0, decimalIndex);
    } else var decimal = '.', int = str;

    if (decimal.length !== 3 ) { //if decimal is not period plus two digits then fix it
        decimal += '0';
        if (decimal.length !== 3) decimal += '0'
    }
    //add commas to separate
    var commaInt = '';
    for (var i = 0, len = int.length; i<len; i++){
        //if the the 4th, 7th, 10th, etc. AND the next digit is not a negative sign
        if (i % 3 === 0 && i !== 0 && int.substr(-i - 1, 1) !== '-') {
            commaInt = ',' + commaInt;
        }
        commaInt = int.substr(-i - 1, 1) + commaInt;
    }
    return commaInt + decimal;
};