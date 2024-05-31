const http=require('http');

const PORT=3031;
const hostname='localhost';

// const server=http.createServer((req,res)=>{

//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plane');
//     res.end('Node server created by ayush');
// });

const server=http.createServer((req,res)=>{

    //home page
    //about page
    //contact page
    //product page
    //rest...>Error
    
    if(req.url=='/'){

        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('welcome to server');

    }else if(req.url=='/about'){        
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('About page!');

    }else if(req.url=='/contact'){        
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('contact page!');

    }else if(req.url=='/product'){        
    const options={
    hostname:'fakestoreapi.com',
    path:'/products/1',
    method:'GET',
   }
   const apiReq=http.request(options,(apiRes)=>{
    apiRes.on('data',(data)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.end((data.toString()));

    })
    })
    apiReq.on('error',()=>{
        console.log(e);
    });
    
    apiReq.end();
    
        
    }else{
        
        res.statusCode=500;
        res.setHeader('Content-Type','text/plain');
        res.end('Server error!');

    }

})

server.listen(PORT,()=>{
    console.log(`server running at ${hostname}:${PORT}`)
})