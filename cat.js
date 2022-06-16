const cat =process.stdin.on('data',(command,file_name)=>{
  const cmd = command.toString().trim();

  process.stdin.on('data',(file_name)=>{
    const fileName =file_name
    process.stdout.write('You typed : '+fileName);
    process.stdout.write('You typed : '+cmd+' '+fileName);
    process.stdout.write('Your file typed : '+cmd+' '+fileName);
    let file_content = `${cmd} ${fileName}`
    process.stdout.write('Your file content : '+file_content);
    process.stdout.write('\nprompt > ');
  });
});

module.exports = cat;
