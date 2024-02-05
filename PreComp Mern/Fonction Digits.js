let num=123542;

function digits(num){
let i=1;
let cont=0;
let test=1;
do { test= num-i;
    i=i*10;
    cont++;} while (test>0)
    cont--;
    return cont;
}
    console.log(digits(num));