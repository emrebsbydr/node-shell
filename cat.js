

const fs = require('fs');

const cat = (fileName,done)=>{
  fs.readFile(fileName,'utf-8', (err,data)=>{
    if(err){
      done(err.stack)

    }else{
      done(data)
    }
  })

}

module.exports = {cat};
