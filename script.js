// Ambil elemen-elemen yang dibutuhkan
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll('.gambar img');
var modalClose = document.getElementsByClassName("close")[0];
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var slideIndex = 0;
var moreBtn = document.querySelector('.btn a'); // Ambil tombol "More"
var container = document.getElementById('container'); // Ambil kontainer galeri

modal.style.display = "none";

// Loop melalui setiap gambar dan tambahkan atribut loading="lazy"
images.forEach(function(img) {
    img.loading = 'lazy';
});

// Tambahkan event listener untuk setiap gambar
images.forEach(function(img, index) {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        slideIndex = index; // Set indeks slide saat ini
    });
});

// Tombol close untuk modal
modalClose.onclick = function() {
    modal.style.display = "none";
}

// Klik di luar gambar untuk menutup modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Fungsi untuk navigasi gambar
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var imgs = document.querySelectorAll('.gambar img');
    if (n >= imgs.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = imgs.length - 1; }
    modalImg.src = imgs[slideIndex].src;
    captionText.innerHTML = imgs[slideIndex].alt;
}
// Fungsi untuk tombol "More"
moreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    container.classList.toggle("expanded");
    if (container.classList.contains("expanded")) {
        moreBtn.textContent = "Less";
    } else {
        moreBtn.textContent = "More";
    }
})