const message = (name) => {
    console.log(`Hello ${name}`);
    // pakai tanda ini `` bkn ini ''
 }

 message('JavaScript');

/*
Module 2 - Dasar2 NodeJS untuk Back-end
- Start inisialisasi membuat projek
1. Buka terminal (cmd atau yang lain)
2. Arahkan direktori ke folder projek yng akan dipakai
3. Ketik di terminal CMD = 'npm init' dan enter
***********
Note:
NPM alias Node Package Manager merupakan JavaScript Package Manager bawaan dari Node.js. 
Melalui NPM ini kita dapat membuat Node.js package (proyek) dan mengelola penggunaan package eksternal 
yang digunakan. Kita akan membahas NPM lebih detail nanti.
***********
4. Kalau projek cuma untuk percobaan enter semua di 
   setiap process (akan diisi secara default oleh nodejs atau silahkan diisi semua)
--> Secara otomatis akan muncul file 'package.json'
5. Untuk menjalankan projek (file utama sesuai setting package.json di index.js)
*/