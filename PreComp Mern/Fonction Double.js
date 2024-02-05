let x = [5,6,3,7,16];

function double(x){
 let y=x;
    for(let i=0; i<x.length ;i++)
      y[i]=x[i]*2;
 return y;

}
double(x);