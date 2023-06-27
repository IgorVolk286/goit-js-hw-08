import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const ulGallery = document.querySelector('.gallery');

function createMarckup(arr) {
  const marckUp = arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item" >
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join(' ');
  return marckUp;
}
ulGallery.insertAdjacentHTML('beforeend', createMarckup(galleryItems));
// console.log(createMarckup(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
