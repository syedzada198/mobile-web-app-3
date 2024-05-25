document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function () {
      item.classList.toggle('active');

      const icon = header.querySelector('i');
      icon.classList.toggle('fa-arrow-down');
      icon.classList.toggle('fa-arrow-right');

      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherIcon = otherItem.querySelector('.accordion-header i');
          otherIcon.classList.remove('fa-arrow-down');
          otherIcon.classList.add('fa-arrow-right');
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


function validateForm() {
  var err = false;
  var name = $("#nameinput").val();
  var email = $("#emailinput").val();
  var message = $("#messageinput").val();
  var password = $("#passwordinput").val();

  if (name === "" || email === "" || password === "" || message === "" || !isValidEmail(email)) {
      err = true;
  }

  function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  if (!err) {
      $("#errMsg").html('<p style="color: green; border: 2px solid green; padding: 10px; font-weight: 600; font-size: 14px;">Successfully submitted.</p>');
      $("#contact-us-form")[0].reset();
  } else {
      $("#errMsg").html('<p style="color: red; border: 2px solid red; padding: 10px; font-weight: 600; font-size: 14px;">All fields are required and email should be in the correct format.</p>');
  }
  return false;
}
