async function fetchUserData (){
   try{
    
    const data = await fetch ("https://dummyjson.com/users")
    const result = await data.json()
       return result.users;
   } catch (err){
    console.error(err)
   }
}
 const processUserData = (x) => {
    const y = x.filter(({ gender }) => gender == 'male')
               .map(({ firstName,lastName, age }) => `FirstName :  ${firstName}    lastName :${lastName}    Age : ${age}`);
    console.log(y);
    
  } 
  const summarizeAge = (x) => {
    const totalAge = x.reduce((accumulator, { age }) => accumulator + age, 0);
    console.log('Total age is :',totalAge)
}


  (async () => {
    const a = await fetchUserData()
    processUserData(a)
    summarizeAge(a)
})()
