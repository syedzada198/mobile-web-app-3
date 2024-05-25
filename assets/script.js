document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function () {
      item.classList.toggle('active');

      const icon = header.querySelector('i');
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');

      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherIcon = otherItem.querySelector('.accordion-header i');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  });
});




document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const cards = document.querySelectorAll('.card-add');

  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  document.querySelector('.next-btn-n').addEventListener('click', nextCard);
  document.querySelector('.prev-btn-n').addEventListener('click', prevCard);

  setInterval(nextCard, 10000);
});





function previewImage() {
  var fileInput = document.getElementById('fileInput');
  var preview = document.getElementById('preview');

  fileInput.addEventListener('change', function () {
    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  });
}





function validateForm() {
  var err = false;
  var name = $("#nameInput").val();
  var email = $("#emailInput").val();
  var message = $("#messageInput").val();

  if (name === "" || email === "" || message === "" || !isValidEmail(email)) {
    err = true;
  }

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (err == false) {
    $("#errorMessage").html('<p style="color: green; border: 2px solid green; padding: 10px; font-weight: 600; font-size: 14px;">Successfully submitted.</p>');
    $("#myForm")[0].reset();
  } else {
    $("#errorMessage").html('<p style="color: red; border: 2px solid red; padding: 10px; font-weight: 600; font-size: 14px;">All fields are required and email should be correct format.</p>');
  }
  return false;
}