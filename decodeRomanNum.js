/**
 * Created by D on 3/4/2015.
 */
/*
UNSOLVED
Convert Roman Numeral into Decimal Notation (biggest roman numeral is 'M' so max # is MMMCMXCIX (3999)
 */
//1) convert string into pieces
//  a) 9 && 4 have cases where  smaller number is first (IX)
//  b) 3/2/1 in a row with smaller number following (MC, II, XI)
//  c) 5 is single character (V)
//  d) 6, 7, 8 midpoint roman numeral followed by lower numbers
//2) convert pieces into decimal notation

function something(roman) {
    var decoder = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    var romanArr = roman.split(''); //array of the current roman numerals that need to be converted (removed after used)
    var decimal = 0;
    for (var i = 0, len = romanArr.length; i < len; i++) {
        //check if last item in array
        if (i === romanArr.length - 1) decimal += decoder[romanArr[i]];
        else {
            var current = decoder[romanArr[i]];
            var next = decoder[romanArr[i + 1]];
            //check if 4 or 9
            if (current < next) {
                decimal += next - current;
                i += 1;
                //check if 5, 6, 7, 8
            } else if ((current + '').substr(0, 1) == '5') { //if the first digit is a 5
                if (next === current / 5) {
                    decimal += current + next; //6
                    i += 1; //move i over 1
                    if (next === decoder[romanArr[i + 1]]) {//7
                        decimal += next;
                        i += 1; //move i over 1
                        if (next === decoder[romanArr[i + 1]]) {//8
                            decimal += next;
                            i += 1; //move i over 1
                        }
                    }
                }
                else decimal += current; //5

            } else {//1, 2, 3
                if (current === next) { //2
                    decimal += current + next;
                    i += 1; //move i over 1
                    if (next === decoder[romanArr[i + 1]]) {//3
                        decimal += next;
                        i += 1; //move i over 1
                    }
                } else decimal += current; //1
            }
        }
    } return decimal;
}