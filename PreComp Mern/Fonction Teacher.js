
let score = 83;
function Tscore(score){
// your program goes here

// Output : B
if (score > 85 ){
    console.log(" your score is A");
} else if (score <= 85 && score > 70){
    console.log(" your score is B");
}else if (score <= 70 && score > 55){
    console.log(" your score is C");
}else if (score <= 55 && score > 40){
    console.log(" your score is D");
}else if (score <= 40 && score > 15){
    console.log(" your score is E");
}else if(score <= 15){
    console.log(" your score is F");
}
} console.log(Tscore(score));