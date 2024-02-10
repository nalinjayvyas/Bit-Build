document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('galleryContainer');
    const imagePaths = [
      'student1.jpg',
      'student1.jpg',
      'student1.jpg',
      'student1.jpg',
      // Add more image paths as needed
    ];
  
    imagePaths.forEach(path => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
  
      const image = document.createElement('img');
      image.src = path;
      image.alt = 'Gallery Image';
  
      galleryItem.appendChild(image);
      galleryContainer.appendChild(galleryItem);
    });
  });
  