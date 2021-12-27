const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});

const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);
 
/* output
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/

/*
Ket:
- process.env berguna untuk menyimpan nilai atau mendapatkan informasi mengenai environment yang digunakan selama proses sedang berlangsung.
- NODE_ENV berguna untuk membuat nilai variabel host berbeda di kala pengembangan (development) dan produksi (production).
- Funtion process.memoryUsage() berguna untuk mendapatkan informasi tentang penggunaan CPU ketika proses berjalan.
- Properti dari process.env yaitu process.argv berguna untuk menampung nilai baris perintah dalam bentuk array ketika menjalankan proses.
*/