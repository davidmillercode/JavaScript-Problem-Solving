/**
 * Created by D on 3/4/2015.
 */
/*
 You have just finished assembling the time-bomb that will be used to destroy the Death Star when Luke Skywalker remarks that 10 seconds wouldn't be enough to escape before detonation, that at least 16 seconds are needed.
 Craps! you have been given only one 7 segment display to show the 9 to 0 countdown and feel completely desperate when Karnaugh's specter appears before you and says "I find your lack of faith disturbing". Just before you start formulating your reply with some words that could be rated ESRB M (or PEGI 18+), you realize that you can extend the detonator circuitry welding together a bunch of logical ports in order to display numbers in the hexadecimal base system.
 Your Task

 You isolated from the circuit the three wires (b2, b1 and b0) used to represent the units above 9, and wish to use them to light up the correct segments so to display the A to F letters:
 b2  b1  b0
 A  0   0   0
 B  0   0   1
 C  0   1   0
 D  0   1   1
 E  1   0   0
 F  1   0   1

 We will number the segments of the display as follows:
        1
      ───
 2   │   │ 3
     ───    4
 5  │   │ 6
    ───
      7
 So, for example, if needed to display 'A' (that means all b2, b1 and b0 off), segments 1, 2, 3, 4, 5 and 6 must be lit; for 'B' (only b0 on), all segments must be turned on; for 'D' (b1 and b0 on), all segments but the one numbered 4 should be lit.
 Constraints

 You will be allowed to use only numbers (in the decimal, octal or hexadecimal base), the variables, logical not (!), bit operators (&, |, ~, ^, <<, >> and >>>), brackets, 'true' and 'false' keywords, and the special soldering alloy called "return". For k-map purposes !, & and | operators should be enough.
 Epilogue

 Too late you realize maybe Luke Skywalker doesn't understand hexadecimal notation, and that 0 and D, and 8 and B may display in the same way, but, wait a minute! UI details, unless specifically expressed, have never been a programmer's concern!
 */

var segments = [
    function segment1(b2, b1, b0) { return 1; }, //always on
    function segment2(b2, b1, b0) { return 1; }, //always on
    function segment3(b2, b1, b0) { return !(b2|b1) | (b1&b0); }, //off on C, E, F
    function segment4(b2, b1, b0) { return !b1; }, //off on C and D
    function segment5(b2, b1, b0) { return 1; }, //always on
    function segment6(b2, b1, b0) { return !(b2|b1) | (b1&b0); }, //off on C, E, F
    function segment7(b2, b1, b0) { return  !(b2&b0) & (b2|b1|b0); } //off on A and F
];