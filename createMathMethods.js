/**
 * Created by D on 3/4/2015.
 */
/*
 Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only
 non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative
 numbers, strings and so on.

 Here is a list of functions, we need:

 Math.round()
 Math.ceil()
 Math.floor()
*/
Math.round = function(number) {
    var difference = number - (number | 0);
    if (difference >= .5) return number + 1 | 0;
    return number | 0;
};

Math.ceil = function(number) { //goes up
    var difference = number % 1;
    if (difference !== 0) return number + 1 | 0;
    return number; //if already int
};

Math.floor = function(number) {
    return number | 0;
};