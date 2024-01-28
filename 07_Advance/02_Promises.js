const promise1 = new Promise(function(resolve, reject){
    //Do an async task like Database call, cryptography, network call
    setTimeout(function(){
        console.log("Async Task is complete")
        resolve()
    }, 1000);
})

promise1.then(function(){
    console.log("Promise Consumed");
})//.then is related to resolve parameter

promise1.catch(function(){
    console.log("Sorry")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task2 executed");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Promise 2 executed");
})
//promise is an object

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username:"Sammy", email: "sammy@example.com"})
    }, 1000)
})

promise3.then((user)=>{
    console.log(user)
})

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"Sammy", password:"123r"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    },3000)
})

promise4.then((user)=>{
   console.log(user)
   return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Done")
})

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Sammy", password:"123r"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    },3000)
})

async function consumePromise(){
      try {
        const response = await promise5
        console.log(response)
      } catch (error) {
        console.log(error)
      }
}

consumePromise()