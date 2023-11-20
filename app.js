const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
const nextBtn = document.querySelector('.arrow_icon_box');
const mainImage = document.querySelector('.main img.one');
const shadowOneImage = document.querySelector('.shadow.one img.one');
const images = [
  './First_place.jpg',
  './animaltest.png',
  './pokemon-bg.jpg',
  './ksnu.png',
  './ksnu.png',
  './ksnu.png'
];

hamburger_menu.addEventListener('click', () => {
  container.classList.toggle('active');
  // Check if the current image is './First_place.jpg'
  if (mainImage.src.includes('/First_place.jpg')) {
    // Find the link with class 'image-0' and change its color to red
    let link = document.querySelector('.image-0');
    console.log(link);
    if (link) {
      link.style.color = 'yellow';
    }
  }
});
let currentImageIndex = 0;

function updateLinkColor(index) {
  // Reset the color of all links
  document.querySelectorAll('.links a').forEach(function (link) {
    link.style.color = ''; // Set to default color
  });
  // Change the color of the current link to white
  const activeLink = document.querySelector('.image-' + index);
  if (activeLink) {
    activeLink.style.color = 'yellow';
  }
}

nextBtn.addEventListener('click', function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // 이미지에 애니메이션 효과를 추가합니다.
  mainImage.style.transform = 'scale(1.2)';
  shadowOneImage.style.transform = 'scale(1.2)';

  // 애니메이션 종료 후 이미지를 변경합니다.
  setTimeout(function () {
    mainImage.src = images[currentImageIndex];
    shadowOneImage.src = images[currentImageIndex];
    mainImage.style.transform = 'scale(1)';
    shadowOneImage.style.transform = 'scale(1)';
    updateLinkColor(currentImageIndex);
  }, 300); // 애니메이션 시간 (0.3초)
});
