import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" " />
          </a>
        </li>

        
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
