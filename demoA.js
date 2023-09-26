'use strict';

function check(number){
    return new Promise((resolve,reject)=>{
        if(number<10){
            reject(`number ${number} is less than 10`)
        } 
        else{
            resolve(`number ${number} is 10 or more`)
        }
    })
}
// check(11).then(console.log).catch(console.log);
// check(1)
//    .then(message=>console.log(message))
//    .catch(err=>console.log(err));

// async-await
async function test(){
    try{
        const result = await check(15);
        console.log('try',result);
        const result2 = await check(1);
        console.log('try',result2);
        const result3 = await check(12);
        console.log('try',result3);
    }
    catch(err){
        console.log('err',err);
    }

}
test()

// putting every const in individual try catch will go through all

async function test2(){
    try{
        const result = await check(5);
        console.log('try',result);
    }
    catch(err){
        console.log('err',err);
    }
    try{
        const result2 = await check(1);
        console.log('try',result2);
    }
    catch(err){
        console.log('err',err);
    }

}
test2()