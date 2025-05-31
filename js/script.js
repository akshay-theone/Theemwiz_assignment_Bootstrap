document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.redirect'); // select ALL .redirect elements

  triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault(); // stop anchor from jumping

      if (window.innerWidth < 750) {
        const contact = document.querySelector('#contactSection');
        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
      } else {
        const map = document.querySelector('#mapSectionDesktop');
        if (map) map.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
