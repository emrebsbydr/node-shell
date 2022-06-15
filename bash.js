require("./pwd");
require("./ls");
process.stdout.write('prompt > ');

// process.stdin.on('data',(pwd)=>{
//   const a = process.cwd();
//   console.log(a);
//   process.stdout.write('You  path  : '+a);
//   process.stdout.write('\nprompt > ');
// });

//--========
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
