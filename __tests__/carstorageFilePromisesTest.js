'use strict';

const {search}=require('../carstorageFilePromises');

describe('Testing with key "licence" and value "ABC-1" to resolve', () => {
    const result=[
        {
            "model":"Bored T-model","licence":"ABC-1"
        }
    ];
    test('then', () => {
        return search('licence','ABC-1')
        .then(data=>expect(data).toEqual(result))
    });

    test('async-await',async ()=>{
        const data= await search('licence','ABC-1');
        expect(data).toEqual(result);
    })
    
});
