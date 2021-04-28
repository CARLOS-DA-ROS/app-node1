
var http = require ('http');
var url = require ('url');
var fs = require ('fs');
const port = process.env.PORT || 3000
var server = http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;
    switch(path){
        case '/index.html':
        fs.readFile(__dirname + path, function(error, data) {
            if (error) {
                response.writeHead(404);
                response.write(error);
                response.end();
            } else {
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                response.write(data);
                response.end();
            }
        });
        break;

        case '/':
            response.writeHead(200, {
                // 'Content-Type': 'text/html'
                'Content-Type': 'text/html'
            });
            response.write('<h1>..TEXTOO EN NAVEGADOR Opera browser..</h1>');
            response.end();
        break;

        case '/pag1.html':
        fs.readFile(__dirname + path, function(error, data) {
            if (error) {
                response.writeHead(404);
                response.write(error);
                response.end();
            } else {
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                response.write(data);
                response.end();
            }
        });
        break;
    default:
        response.writeHead(404);
        response.write("eerorrrrr");
        response.end();
        break;
    }
});
console.log('Sett en puerto ' + port);
server.listen(port);
