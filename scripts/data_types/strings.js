// #1 Uppercase the first character
/*
function ucFirst(str) {
    if(str){
        return str[0].toUpperCase()+str.slice(1);
    } else {
        return "";
    }
}
*/

// #2 Check for spam
/*
function checkSpam(str) {
    str = str.toLowerCase();
    if (str.indexOf("xxx") == -1 && str.indexOf("viagra") == -1) {
        return false;
    } else {
        return true;
    }
}
*/

// #3 Truncate the text
/*
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, +maxlength-1) + "…";
    }
    return str;
}
*/

// #4 Extract the money

function extractCurrencyValue(str) {
    return +str.slice(1);
}