let num=123542;
let i=1;
let cont=0;
let test=1;


do { test= num-i;
    i=i*10;
    cont++;} while (test>0)
    cont--;

    console.log(cont);