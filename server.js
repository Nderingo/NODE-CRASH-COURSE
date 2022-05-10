const  fs  = require('fs');
const http = require('http');

const server =http.createServer((req,res)=>{
  console.log(req.url, req.method);

// set Header content-type
res.setHeader('Content-Type', 'text/html');

let path = './views/';
switch(req.url) {
  case '/':
    path += 'index.html';
    break;
  case '/about':
    path += 'about.html';
    break;
  default:
    path += '404.html';
    break;  

}

fs.readFile(path,(err,data) =>{
 if(err) {
   console.log(err);
   res.end();
 }else{
  // res.write(data);
   res.end(data);
 }
 });
});



server.listen(3000,'localhost',()=>{
  console.log('listening on port 3000');
});





