const process = require('process');

process.on('exit', () => {
    console.log('The process finishes');
})
process.on('exit', () => {
    console.log('Ale, the process finished');
    setTimeout(() => {
        console.log('This will never be seen');
    }, 0);
})

setTimeout(() => {
    console.log('This will be seen');
}, 0);

process.on('uncaughtException', (err,origen) => {
    console.log('Wow, we forgot to capture an error');
    console.error(err);
});
process.on('uncaughtRejection');

notExistingfunction();

console.log('This if error not caught');