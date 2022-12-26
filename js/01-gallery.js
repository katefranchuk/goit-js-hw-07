import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
    })
    .join('');
}

galleryContainerEl.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));

galleryContainerEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains('gallery__image');

  if (!isGalleryImageEl) {
    return;
  }

  const src = event.target.dataset.source;

  onModalOpen(src);
}

let instance = null;

function onModalOpen(source) {
  instance = basicLightbox.create(`<img src="${source}">`, {
    onShow: () => document.addEventListener('keydown', onEscKeyBtnPress),
    onClose: () => document.removeEventListener('keydown', onEscKeyBtnPress),
  });
  instance.show();

  
}


function onEscKeyBtnPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
  console.log('hi');
}
