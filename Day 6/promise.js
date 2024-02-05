const myPromise = new Promise(function (resolve, reject) {
    const alright = true;
        setTimeout(function () { 
            if (alright) resolve("Everything went well");
            else reject("Encountered an error");
        }, 2000)
    }); 
    console.log("1");
    myPromise
      .then( (value) => {
        console.log(value);
      })
      .catch( (error) => {
        console.log(error);
      })
      .finally( () => {
        console.log("Promise completed");
      });
    console.log("2");
    // output: 
    // 1
    // 2
    // Everything went well
    // Promise completed
    
    