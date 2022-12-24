import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        
          <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" " />
          </a>
        
    `;
    })
    .join('');
}


galleryContainerEl.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));

galleryContainerEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
   event.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});