const fs = require('fs');

fs.mkdir ('./assets',(err) =>{
    if(err) {
        console.log(err);
    }
    console.log('file created')
});

if(fs.existsSync('./docs/blog4.txt')) {
    fs.unlink('./docs/blog4.txt', (err)=>{
        if(err) {
            console.log(err)
        }
        console.log('file deleted');
    });
}