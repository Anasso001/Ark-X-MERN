const user = require('./user.json')

function Authentication(pin ,id)
{ let fa= user.find((x)=>{if(x.pin === pin && x.accountID === id) {return true }
else return false
} )
    if (fa)
      console.log(`succe d'Autentification`)
    else
    console.log(`erreur d'Authentication`)

}


Authentication('1234' ,'ACC1001')
