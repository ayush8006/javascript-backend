const os=require('os');

// console.log('CPU architecture: '+os.arch());

// console.log('free memory: '+os.freemem());

// console.log('total memory: '+os.totalmem());

// console.log('network interfaces: '+JSON.stringify(os.networkInterfaces()));

// console.log('os default temp dir: '+os.tmpdir());


console.log('Endianess:'+os.endianness());

console.log('Hostname:'+os.hostname());

console.log('OS TYPE:'+os.type());

console.log('Platform:'+os.platform());