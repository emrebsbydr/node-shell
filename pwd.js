const pwd = process.stdin.on('data',(pwd)=>{
  const a = process.cwd();
  process.stdout.write('You  path  : '+a);
  process.stdout.write('\nprompt > ');
});
module.exports = pwd;
