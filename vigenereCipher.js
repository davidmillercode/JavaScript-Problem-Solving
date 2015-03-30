/* 4kyu
 The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and
 published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger
 autokey cipher (a cipher that incorporates the message of the text into the key).

 The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the
 nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

 From Wikipedia:

 The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on
 the letters of a keyword. It is a simple form of polyalphabetic substitution.
 (...)

 In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher
 of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several
 Caesar ciphers in sequence with different shift values.
 Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat
 the key over characters only if they are part of the alphabet, and that is not the case here.

 The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

 Visual representation (suggested by OverZealous)

 message: my secret code i want to secure
 key:     passwordpasswordpasswordpasswor
 Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

 E.g.

 var alphabet = 'abcdefghijklmnopqrstuvwxyz';
 var key = 'password';

 // creates a cipher helper with each letter substituted
 // by the corresponding character in the key
 var c = new VigenèreCipher(key, alphabet);

 c.encode('codewars'); // returns 'rovwsoiv'
 c.decode('laxxhsj'); // returns 'waffles'
 Any character not in the alphabet must be left alone.

 E.g. (following from above)

 c.encode('CODEWARS'); // returns 'CODEWARS'
 */

function VigenèreCipher(key, abc) {
    function extendKey(length){ //make key at least as long as msg
        if (key.length < length) {
            for (var i=0, len = Math.ceil(length/key.length); i < len; i++){
                key += key;
            }
        }
        return key; //str is now at least as long as the thing we are trying to de/encode
    }
    //either encode or decode message depending on direction parameter passed
    function shiftCode(msg, direction){
        var abcLen = abc.length;
        var shiftedCode = ''; //str to be returned
        msg.split('').forEach(function(char, i){
            var moveBy = abc.indexOf(key.substr(i, 1)); //a moves 0, z moves 25
            var shiftedCharInd; //char ind after it's encoded OR decoded

            if (moveBy !== -1  && abc.indexOf(char) !== -1){ //if char in abc
                if (direction == 'encode') {
                    var encodedIndex = abc.indexOf(char) + moveBy;
                    shiftedCharInd = (encodedIndex > abcLen - 1) ? encodedIndex - abcLen : encodedIndex;
                }else { //decode
                    var decodedIndex = abc.indexOf(char) - moveBy;
                    shiftedCharInd = (decodedIndex < 0) ? decodedIndex + abcLen : decodedIndex;
                }
                shiftedCode += abc.substr(shiftedCharInd, 1);

            } else shiftedCode += char;
        });
        return shiftedCode; //returns encoded OR decoded str
    }
    this.encode = function (str) {
        key = extendKey(str.length);
        return shiftCode(str ,'encode');
    };
    this.decode = function (str) {
        key = extendKey(str.length);
        return shiftCode(str ,'decode');
    };
}



function dismember (func) {
    var funcStr = func.toString().indexOf('(', 8) + 1; //str of func starting after '('
    var firstClose = funcStr.indexOf(')');
    var params =[];
    //function findLastParamClose(){}
    var nextOpen = (funcStr.indexOf('(') !== -1) ? funcStr.indexOf('(') : false;
    if (firstClose < nextOpen && nextOpen !== false) {
        funcStr.slice(0, firstClose).split(',').forEach(function(param){
            params.push(param);
        });
    }
    return params;


}