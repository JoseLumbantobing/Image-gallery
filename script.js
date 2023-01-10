/*  --- Cara I ---
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb');

thumb.forEach(function(el) {
    el.addEventListener('click', function(e) {
        jumbo.src = e.target.src;
    });
});
*/

//  --- Cara II ---
const jumbo = document.querySelector('.jumbo');
const container = document.querySelector('.container');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        // class fade hanya akan ditambahkan untuk click pertama saja, jika ingin diterapkan pada semua elemen maka fade harus dihilangkan terlebih dahulu
        // setelah .5s hilangkan class fade (sesuai dengan lama animasi)
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        // Agar hanya target yg memiliki class active maka perlu perulangan agar setiap target di click kelas dikembalikan lagi menjadi thumb
        thumbs.forEach(function(thumb) {
            thumb.className = 'thumb';
        });

        // Memasukkan kelas active pada target yg dipilih
        e.target.classList.add('active');
    }
});