
let a = -15;
let b = 6;
let c = 2.6;

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

console.log("The largest number is " + Maximum);
