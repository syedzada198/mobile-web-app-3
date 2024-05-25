document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function (item) {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', function () {
        // Toggle active class on clicked accordion item
        item.classList.toggle('active');
  
        // Toggle plus and minus icons
        const icon = header.querySelector('i');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
  
        // Close other accordion items if open
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
  