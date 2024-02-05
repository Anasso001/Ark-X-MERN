let person = { 
    firstname: "Anas", 
    lastname: "Filali Boubrahmi",
    age: 22,
    
    
    get fullname() { 
        return "My name is"+" " +this.firstname+" "+this.lastname; 
    },

      set fullname(newfn){
        [this.firstname, this.lastname] = newfn.split(" ");
          console.log("full name has changed successfully")
      }
};
person.fullname="Walid Habachi";

console.log(person.firstname);
console.log(person.lastname);