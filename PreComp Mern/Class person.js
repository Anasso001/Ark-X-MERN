
class person{
    constructor(name,age){
                this.name=name;
                this.age=age;
            }
    compareAge(x){
              if (this.age < x.age)
                   console.log(x.name,"is older than me");
              else if (this.age = x.age)
                   console.log(x.name,"is the same age as me");
              else console.log (x.name,"is younger than me");
     }       

}

p1 = new person("Samuel", 24);
p2 = new person("Joel", 36);
p3 = new person("Lily", 24);


p1.compareAge(p2);

p2.compareAge(p1);

p1.compareAge(p3);