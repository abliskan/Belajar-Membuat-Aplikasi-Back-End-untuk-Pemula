const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method, url } = request;
 
    response.setHeader('Content-Type', 'text/html'); // Melampirkan tipe (MIME types) disisipkan pada header response ("nilai property", "nilai untuk headernya")
 
    if(url === '/') {
        if(method === 'GET') { 
            // response bila client menggunakan GET
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');

        } else {
            // response bila client tidak menggunakan GET            
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if(url === '/about') {
        if(method === 'GET') { 
            // response bila client menggunakan GET
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah about</h1>');
        } else if (method == 'POST') {
            // response bila client menggunakan POST 
            let body = [];
            
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h2>`);
            });
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } else {
        response.statusCode = 404; // Untuk menetapkan nilai status code pada response
        response.end('<h1>Halaman tidak ditemukan!</h1>'); // Untuk mengubah status message
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
/* 
Note:
- Status code haruslah bernilai 3 digit angka dengan ketentuan berikut:
100-199: informational responses.
200 - 299: successful responses.
300-399: redirect.
400-499: client error.
500-599: server errors.
*/