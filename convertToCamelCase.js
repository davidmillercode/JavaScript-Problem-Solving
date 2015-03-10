/*
 Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

 Examples:

 // returns "theStealthWarrior"
 toCamelCase("the-stealth-warrior")

 // returns "TheStealthWarrior"
 toCamelCase("The_Stealth_Warrior")
 */
function toCamelCase(str){
    var strArray;
    if (str.indexOf('-') !== -1){ //if delineated by -
        strArray = str.split('-');
    } else {
        strArray = str.split('_');  //if delineated by _
    }
    var camelCase = strArray[0]; //keeps first word value as is
    for (var i=1, len=strArray.length; i < len; i++){
        var capitalized = strArray[i].substr(0, 1).toUpperCase() + strArray[i].slice(1); //redundant but clearer
        camelCase += capitalized;
    }
    return camelCase;
}