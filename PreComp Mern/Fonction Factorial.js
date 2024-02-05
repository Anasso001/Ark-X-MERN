let num=5 ;

function factor(num){

let factorial= num;
for (let i=1 ; i<num ; i++) {

    factorial = factorial * (num-i);

} 
return factorial;
}console.log( "factorial of ",num,"=",factor(num));