/**
 * Created by D on 3/4/2015.
 */
/*
 Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral
 representation of that integer.

 Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping
 any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is
 written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

 Example:

 solution(1000); // should return 'M'
 Help:

 Symbol    Value
 I          1
 V          5
 X          10
 L          50
 C          100
 D          500
 M          1,000
 Remember that there can't be more than 3 identical symbols in a row.
 */

function solution(number){
    var romanNums = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var numberStr = number + '';
    var romanStr = '';
    var digitToEval = numberStr.length; //which decimal place the loop is currently changing to roman numeral
    var modifier; //this modifier will tell us how which roman numerals to use in romanNums array
    for (var i = 0, len = digitToEval; i < len; i++) {
        switch (digitToEval){//sets modifier which determines which roman numerals to use
            case 4:
                modifier = 6;
                break;
            case 3:
                modifier = 4;
                break;
            case 2:
                modifier = 2;
                break;
            case 1:
                modifier = 0;
                break;
        }

        switch(+numberStr.substr(i, 1)){ //sets digit to appropriate roman rep. and adds to roman numeral str.
            case 9:
                romanStr += romanNums[modifier] + romanNums[modifier + 2];
                break;
            case 8:
                romanStr += romanNums[modifier + 1] + romanNums[modifier] + romanNums[modifier] + romanNums[modifier];
                break;
            case 7:
                romanStr += romanNums[modifier + 1] + romanNums[modifier] + romanNums[modifier];
                break;
            case 6:
                romanStr += romanNums[modifier + 1] + romanNums[modifier];
                break;
            case 5:
                romanStr += romanNums[modifier + 1];
                break;
            case 4:
                romanStr += romanNums[modifier] + romanNums[modifier + 1];
                break;
            case 3:
                romanStr += romanNums[modifier] + romanNums[modifier] + romanNums[modifier];
                break;
            case 2:
                romanStr += romanNums[modifier] + romanNums[modifier];
                break;
            case 1:
                romanStr += romanNums[modifier];
                break;
        }
        digitToEval = digitToEval - 1;
    }
    return romanStr;
}