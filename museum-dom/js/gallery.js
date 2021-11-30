const galleryPictures = document.querySelector('.gallery__pictures');

let images = [
    './assets/gallery/galery1.jpg',
    './assets/gallery/galery2.jpg',
    './assets/gallery/galery3.jpg',
    './assets/gallery/galery4.jpg',
    './assets/gallery/galery5.jpg',
    './assets/gallery/galery6.jpg',
    './assets/gallery/galery7.jpg',
    './assets/gallery/galery8.jpg',
    './assets/gallery/galery9.jpg',
    './assets/gallery/galery10.jpg',
    './assets/gallery/galery11.jpg',
    './assets/gallery/galery12.jpg',
    './assets/gallery/galery13.jpg',
    './assets/gallery/galery14.jpg',
    './assets/gallery/galery15.jpg'
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
};

shuffle(images);

let result = ''

for (let i = 0; i < images.length; i++) {
    if (i == 4 || i == 9) {
        img = `<img src="${images[i]}" alt="gallery${i}" class="gallery__img"><div class="gallery_column-space"></div>`
    } else {
        img = `<img src="${images[i]}" alt="gallery${i}" class="gallery__img">`;
    }
    result += img
}

galleryPictures.innerHTML = result
// images.map(function(){
//     galleryPictures.innerHTML = `<img src="${images[i]}" alt="gallery${i}">`;
// })