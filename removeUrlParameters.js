/*
 Complete the method so that it does the following:

 Removes any duplicate query string parameters from the url
 Removes any query string parameters specified within the 2nd argument (optional array)
 Examples:

 stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
 stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
 stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
*/
function stripUrlParams(url, paramsToStrip){
    paramsToStrip = paramsToStrip || [];
    var queryStartIndex = url.indexOf('?');
    if (queryStartIndex === -1) return url;
    var newUrl = url.slice(0, queryStartIndex);
    var query = url.slice(queryStartIndex);
    var found = query.match(/(?:\?|&)([^=&#]+)=([^=&#]+)/g);
    var keys=[];
    found.forEach(function(keyValuePair){
        var key = keyValuePair.slice(1, keyValuePair.indexOf('='));
        //if unused key and the key is not one of the parameters to remove, add key/value to newUrl and store key
        if (keys.indexOf(key) === -1 && paramsToStrip.indexOf(key) === -1) {
            keys.push(key);
            newUrl += keyValuePair;
        }
    });
    return newUrl;
}