'use strict';

const {search} =require('./carstorageFilePromises');

search().then(console.log).catch(console.log);

search('licence','ABC-1').then(console.log).catch(console.log);