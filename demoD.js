'use strict';

function start(){
    return Promise.resolve('Task started');
}

function middle(data){
    return Promise.resolve(data+' we are in the middle');
}

function end(data){
    return Promise.resolve(data+', end of task');
}

start()
.then(data=>middle(data))
.then(result=>end(result))
.then(message=>console.log(message+'. We are done!'))

// console.log(start());
// console.log(middle());
// console.log(end());

// async function doTasks(){
//     const data = await start();
//     const result = await middle(data);
//     const message = await end(result);
//     console.log(message+'. We are done!');
// }
// doTasks();

start()
.then(data=>{
    console.log(data + '.moving to the next phase...');
    return middle(data)})
.then(result=>end(result))
.then(message=>console.log(message+'. We are done!'))