
let a = -15;
let b = 6;
let c = 2.6;
function max(a,b,c){
// your program goes here

// should output : 6
let Maximum;

if(a >= b && a >= c) {
    Maximum = a;
}
else if (b >= a && b >= c) {
    Maximum = b;
}
else {
    Maximum = c;
}
return Maximum;
}
console.log("The largest number is " + max(a,b,c) );
