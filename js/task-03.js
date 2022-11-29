const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGaleryGreed =({ url, alt }) => {
  return `
 <li>
  <img src="${url}" alt="${alt}">
 </li>
  `;
};

// console.log(images);
// console.log(makeGaleryGreed(images[1]));
const ulGallery = document.querySelector('.gallery')
const makeGaleryGreeded = images
  .map(makeGaleryGreed)
  .join(" ")
ulGallery.insertAdjacentHTML('afterbegin', makeGaleryGreeded)
ulGallery.setAttribute("style", "list-style-type:none; display: flex; gap: 10px;");
console.log(makeGaleryGreeded);