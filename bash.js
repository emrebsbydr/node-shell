require("./pwd");
require("./ls");
let {cat} = require("./cat")
console.log('cat function ::', cat)
process.stdout.write('prompt > ');

process.stdin.on('data',(data)=>{
  const cmd = data.toString().trim();

  process.stdout.write('You typed : '+cmd);
  process.stdout.write('\nprompt > ');
});

// import {cwd} from 'node:process';
// console.log(`current directory :${cwd()}`)
// console.log(process.cwd())
// console.log(pwd)
// const cwd = require('process.cwd()')
// console.log(`current dir :`+cwd)
