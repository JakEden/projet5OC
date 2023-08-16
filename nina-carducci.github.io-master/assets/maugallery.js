var currentIndex = 0;
var galleryItems;

document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal 
  var img = document.querySelectorAll(".modal-trigger");
  var modalImg = document.getElementById("modalImage");

  // Function to change the modal image
// Function to change the modal image
function changeImage(imageUrl) {
  modalImg.src = imageUrl;
}

// Show the modal with the clicked image
img.forEach(function (image) {
  image.onclick = function () {
    modal.style.display = "block";
    changeImage(this.dataset.imageUrl);
    currentIndex = Array.from(galleryItems).findIndex(
      (item) => item.dataset.imageUrl === this.dataset.imageUrl
    );
  };
});

  // Get the array of gallery items
  galleryItems = document.querySelectorAll(".modal-trigger");

  // Function to show the image based on the index
  function showImage(index) {
    var item = galleryItems[index];
    modal.style.display = "block";
    changeImage(item.dataset.imageUrl);
  }

  // Event listener for the previous arrow icon
  document.getElementById("prevImage").onclick = function () {
    showPrevImage();
  };

  // Event listener for the next arrow icon
  document.getElementById("nextImage").onclick = function () {
    showNextImage();
  };

  // Function to show the previous image
  function showPrevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
  }

  // Function to show the next image
  function showNextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
  }

  // Event listener for the close icon
  document.getElementsByClassName("close")[0].onclick = function () {
    modal.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Function to show the modal with the first image
  function openModalWithFirstImage() {
    if (galleryItems.length > 0) {
      showImage(currentIndex);
    }
  }

  // Call the function to open the modal with the first image when the user clicks on an image
  img.forEach(function (image) {
    image.addEventListener("click", openModalWithFirstImage);
  });


  // Get all filter buttons
  const filterButtons = document.querySelectorAll(".btn");

  // Function to filter gallery items based on the selected category
  function filterGalleryItems(category) {
    galleryItems.forEach((item) => {
      const itemTag = item.dataset.galleryTag;
      if (category === "Tous" || itemTag === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Event listener for the filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active-tag"));
      // Add the active class to the clicked button
      this.classList.add("active-tag");
      // Get the selected category
      const selectedCategory = this.innerText;
      // Call the function to filter the gallery items
      filterGalleryItems(selectedCategory);
    });
  });
  const tousButton = document.getElementById("btn-Tous");
  tousButton.classList.add("active-tag");

  // Function to show the modal with the first image
  function openModalWithFirstImage() {
    if (galleryItems.length > 0) {
      showImage(currentIndex);
    }
  }

  // Call the function to open the modal with the first image when the user clicks on an image
  img.forEach(function (image) {
    image.addEventListener("click", openModalWithFirstImage);
  });

  // Call the function to filter the gallery items with the default "Tous" category
  filterGalleryItems("Tous");
});
