function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}



  function changeImage(element) {
    const featured = document.getElementById('featured-image');
    featured.src = element.src;

    // Remove active class from all thumbnails
    document.querySelectorAll('.thumbnail-row img').forEach(img => {
      img.classList.remove('active');
    });

    // Add active class to clicked one
    element.classList.add('active');
  }

  // Auto select the first thumbnail
  window.onload = () => {
    const featuredImage = document.getElementById('featured-image');
    const thumbnails = document.querySelectorAll('.thumbnail-row img');
  
    const images = [
      './images/ecarousel/e1.png',
      './images/ecarousel/e2.png',
      './images/ecarousel/e3.png',
      './images/ecarousel/e4.png',
      './images/ecarousel/e5.png',
      './images/ecarousel/e6.png',
      './images/ecarousel/e7.png'
    ];
  
    let currentIndex = 0;
    let interval;
  
    function updateImage(index) {
      currentIndex = (index + images.length) % images.length;
      featuredImage.src = images[currentIndex];
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      if (thumbnails[currentIndex]) {
        thumbnails[currentIndex].classList.add('active');
      }
    }
  
    function nextImage() {
      updateImage(currentIndex + 1);
    }
  
    function prevImage() {
      updateImage(currentIndex - 1);
    }
  
    function resetTimer() {
      clearInterval(interval);
      interval = setInterval(nextImage, 5000);
    }
  
    // Add click event to each thumbnail
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        updateImage(index);
        resetTimer();
      });
    });
  
    // Add click event to arrows
    document.getElementById('next-btn').addEventListener('click', () => {
      nextImage();
      resetTimer();
    });
  
    document.getElementById('prev-btn').addEventListener('click', () => {
      prevImage();
      resetTimer();
    });
  
    // Initial display
    updateImage(0);
    interval = setInterval(nextImage, 5000);
  };
  