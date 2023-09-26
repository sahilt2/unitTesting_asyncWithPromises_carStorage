'use strict';

const randomPromiseObject= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('resolves with delay'),Math.random()*2000);

    setTimeout(()=>reject('rejects with timeout'),Math.random()*2000);
});

// we create only one object. So when the state is reached it can't change after that.
// All calls result the same
randomPromiseObject.then(console.log).catch(console.log);

randomPromiseObject
.then(message=>console.log(message))
.catch(err=>console.log(err));

randomPromiseObject
.then(message=>console.log(message))
.catch(err=>console.log(err));