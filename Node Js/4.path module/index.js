const path=require("path");

// console.log(path.sep);//  '\' in windows


// console.log(process.env.PATH);


// console.log(path.delimiter);// ;->in windows

const filepath1='/public_html/home/index.html';

const currentFilePath= __filename;

console.log(currentFilePath);

console.log(__dirname);

let basename =path.basename(currentFilePath);

console.log(basename);

let basenamewithoutext=path.basename(currentFilePath,'.js');

console.log(basenamewithoutext);