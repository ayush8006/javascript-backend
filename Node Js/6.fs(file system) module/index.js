const fs=require('fs');

//Asynchronous way to read file
// console.log("read data");
// fs.readFile('input.txt',function(err,data){

//     if(err){
//         console.log('Error:',err);
//         return err;
//     }
//     console.log('Data:',data.toString());
//     console.log('Read end');
//     return data;

// });

//console.log("other stuff");

//synchronous way to read file-->readfile async does not take a call back

// var data=fs.readFileSync('input.txt',function(err,data){

//     if(err){
//         console.log('Error:',err);
//         return err;
//     }
//     console.log('Data:',data.toString());
//     console.log('Read end');
//     return data;

// });


// var data=fs.readFileSync('input.txt');

// console.log("data:",data.toString());

// console.log('READ END');

// console.log("other stuff");


//  const buf=new Buffer(1024);

// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//         console.log('Error in opening file :',err);
//     }
//     console.log("file open successfully!");
    
//     fs.read(fd,buf,0,buf.length,5,function(er,data){

//         if(er){
//             console.log('Error in reading file');
//         }      

//         console.log('data:',data);

//         console.log('Data: ',buf.slice(0,data).toString());

//          fs.close(fd,function(err){

//             if(err){
//                 console.log('error in closing file');
//             }
//             else{
//                 console.log('success in closing file');
//             }
//          })



//     })

// });

//writing in file->override the file

// fs.writeFile('input.txt','AYUSH GOYAL',function(err){
//     if(err){
//         console.log('Error in writing file');
//     }
//     else{
//         console.log('success in writing file');
//     }
// })

//appending in file

// fs.appendFile('input.txt','--nishu ','utf-8',function(err){

//     if(err){
//         console.log('error in appending file');
//     }
//     else{
//         console.log('success in appending file');
//     }
// })

//deleting a file

fs.unlink('input.txt',function(err){
    if(err){

        console.log('error in deleting file');
    }
    else{

        console.log('success in deleting file');
    }
})