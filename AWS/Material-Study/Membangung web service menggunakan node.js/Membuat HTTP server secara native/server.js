const http = require('http'); // memanggil core module dr node.js untuk menjalankan web server

// Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    /* 
    * Jika dokumen HTML menampilkan status 200, maka tampilan web akan menampilkan "<h1>Halo HTTP Server!</h1>"
    */
    response.statusCode = 200; 
    response.end('<h1>Halo HTTP Server!</h1>');
};

const server = http.createServer(requestListener); // method "" ini digunakan untuk membuat HTTP server

const port = 5000;
const host = 'localhost';

// Perintah agar server selalu available untuk menangani permintaan yang masuk dr client
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
/*
* Jalankan program ini dgn perintah = "npm run start"
*/