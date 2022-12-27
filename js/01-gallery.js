import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const items = [];
galleryItems.forEach(element => {
    const galleryItem = document.createElement('div');
	galleryItem.classList.add ('gallery__item');
    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = element.original;
    const image = document.createElement("img");
    image.classList.add('gallery__image');
    image.src = element.preview;
    image.setAttribute('data-source', element.original);
    image.alt = element.description;

    galleryItem.append(linkEl);
	linkEl.append(image);
	items.push(galleryItem)
})
gallery.append(...items);

gallery.addEventListener('click',onGalleryClick);
function onGalleryClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !=='IMG'){
        return;
    }
    const selectedImage = evt.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
    `);
    instance.show();

    gallery.addEventListener('keydown', evt => {
        if (evt.key === 'Escape') {
        instance.close()
	    };
    });
};



// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:
// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2.Реалізація делегування на div.gallery і отримання url великого зображення.
// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr
// і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4.Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5.Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову 
// розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
//   Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і 
// вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.
// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач 
// буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.
// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури 
// було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного 
// закриття модального вікна.