const { createServer } = require('http');

const port = 3000;

function router(req, res) {
    switch(req.url) {
        case '/':
            res.end('<h1>Welcome to main url!!!</h1>');
            break;
        case '/hello':
            res.end('<h1>Hello!!!</h1>');
        default:
            res.write('404! Url doesn`t exist! ');
            res.end('');
    }
}

const server = createServer(router);

server.listen(port, (err) => {
    if (err) {
        console.info('Could not establish a connection to the server');
        console.error(err.message);
    }
    console.info('Ready')
})