/**
 * Created by D on 3/4/2015.
 */
/* In this kata, you have to break a code of 3 digits. The tryCode() function is called in loop with a max of 10
attempts.
It has to return an array of 3 digits.

    During the first call, the "indications" parameter is null, then it is the result array of the confrontation between
    last proposition and solution. You may have 3 different values:

    0 means the proposed digit is correct
1 means the proposed digit is lower than the correct one
-1 means the proposed digit is higher than the correct one
Pseudo-algorithm example :

    solution is randomly created, in this example this [1,2,3]
tryCode(null) => [0, 2, 4] // for the first call, indications is null, we assume that it returns [0,2,4]
tryCode([1, 0, -1]) // [0, 2, 4] isn't the solution, so tryCode() is called again, with the indications [1, 0, -1] as
explained above : 0 below 1 => 1 ; 2 == 2 => 0 ; 4 above 3 => -1
    ...so on, until tryCode() returns the solution or it is called up to 10 times (to avoid a brute force) */

var entered = [4, 4, 4];
function tryCode(indications) {
    // TODO : indications are null or a 3-digits array.
    if (indications === null) {return [4, 4, 4];}
    else {
        indications.forEach(function(digit, i){
            entered[i] = entered[i] + digit;
        });
    }
    return entered;
}
