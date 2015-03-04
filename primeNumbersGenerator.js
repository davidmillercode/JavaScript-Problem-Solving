/**
 * Created by D on 3/4/2015.
 */
/*
 We need prime numbers and we need them now!

 Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.

 For example:

 prime(11);
 Should return an array that looks like this:

 [2,3,5,7,11]
 */
function prime(num) {
    var primeArray = [];
    for (var i = 2; i<=num; i++){ //start @ 2 because it is first prime
        var isPrime = true;
        for (var j = 2; j <= i; j++){
            if (i % j ===0 && i !==j) { //if the starting num (i) can be divided by j w/o remainder then it is not prime
                isPrime = false;
                break;
            }
        }
        if (isPrime) primeArray.push(i);
    }
    return primeArray;
}