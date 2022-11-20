const fs = require('fs');

function read(route, callback){
    fs.readFile(route, (err, data) => {
        if (err) {
            console.error('Error by reading file.txt: ', err)
        }
        callback(data.toString());
    })
}

function write(route, content, callback){
    fs.writeFile(route, content, function (err) {
        if (err) {
            console.error('Error by writting into file: ', err)
        }
        callback()
    })
}

function remove(route, callback) {
    fs.unlink(route, callback);
}

read(__dirname + '/file.txt', console.log);

write(__dirname + '/writtenfile.txt', 'I am a new file', console.log);

setTimeout(function () {console.log("Removing written file... ")}, 100);

setTimeout(function () { remove(__dirname + '/writtenfile.txt', console.log)}, 5000);

