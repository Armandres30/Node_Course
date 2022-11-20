const os = require('os');

console.log(os.arch()) //Get architecutre of chip of device
console.log(os.platform()) // Get platform of device
console.log(os.cpus()) //Get info of CPUs
console.log(os.cpus().length) //Get number of CPUs


console.log(os.constants); // Get all constants
const SIZE = 1024;
function kb(bytes) { return bytes/ SIZE}
function mb(bytes) { return kb(bytes)/ SIZE}
function gb(bytes) { return mb(bytes)/ SIZE}
console.log(os.freemem()); // 
console.log(kb(os.freemem())); // 
console.log(mb(os.freemem())); // 
console.log(gb(os.freemem())); // 

console.log(gb(os.totalmem())); // 

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());