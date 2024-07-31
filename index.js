var array1 = [2,5,6];
var array2 = [3,5,6,4];
function calcul(tab1, tab2) {
var sum1= 0;
var sum2 = 0;
    for (var i = 0; i < tab1.length; i++) {
        if (tab2.includes(tab1[i])) {
        } else {sum1 += tab1[i]}
    for (var i = 0; i < tab2.length; i++) {
        if (tab1.includes(tab2[i])) { 
        } else {  sum2 += tab2[i]; } }
        return sum1+sum2;}}
console.log(calcul(array1, array2));



