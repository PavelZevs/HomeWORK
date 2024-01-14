document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    const images = [
      '../images/slide-1.jpg',
      '../images/slide-2.jpg',
      '../images/Bg.jpg',
    ];

    let currentImageIndex = 0;
    
    function changeBackground() {
      header.style.backgroundImage = `url(${images[currentImageIndex]})`;
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000); 
  });