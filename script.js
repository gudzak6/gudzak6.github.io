document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
      alert('Please fill out all fields.');
    }
  
    // Clear form after submission
    document.getElementById('contactForm')?.reset();
  });
  
  // JavaScript for Carousel Navigation
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const images = carousel.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('hidden', i !== index);
    });
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
});
