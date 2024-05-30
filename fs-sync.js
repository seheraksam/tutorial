const {readFileSync,writeFileSync}=require('fs');
console.log('start')
const first=readFileSync(`./content/test.txt`,`utf-8`);
const second=readFileSync(`./content/test2.txt`,`utf-8`);
writeFileSync('./content/result-sync.txt',`Here is the result:${first},${second}`,{flag:'a'})

console.log('done with task')
console.log('starting the next one ')