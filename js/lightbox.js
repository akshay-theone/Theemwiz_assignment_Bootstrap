document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxName = document.getElementById('lightboxName');
  const lightboxRole = document.getElementById('lightboxRole');
  const lightboxQuote = document.getElementById('lightboxQuote');
  const lightboxCompany = document.getElementById('lightboxCompany');
  const closeBtn = document.getElementById('closeBtn');

  // Existing devDiv click handlers
  const devDivs = document.querySelectorAll('.devDiv');

  devDivs.forEach(devDiv => {
    devDiv.addEventListener('click', () => {
      const img = devDiv.querySelector('.devImg');
      const name = devDiv.querySelector('.devName').textContent;
      const role = devDiv.querySelector('.devDes').textContent;

      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Profile Image';

      lightboxName.textContent = name;
      lightboxRole.textContent = role;
      lightboxQuote.textContent = '';   // Clear quote & company
      lightboxCompany.textContent = '';
    });
  });

  // New: manDiv click handler
  const manDiv = document.getElementById('manDiv');
  if (manDiv) {
    manDiv.addEventListener('click', () => {
      const img = manDiv.querySelector('img');
      const quote = manDiv.querySelector('.manText').textContent;
      const company = manDiv.querySelector('.text-light').textContent;

      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Image';

      // Clear dev name/role
      lightboxName.textContent = '';
      lightboxRole.textContent = '';

      // Set quote + company
      lightboxQuote.textContent = quote;
      lightboxCompany.textContent = company;
    });
  }

  // Close lightbox handlers
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    lightboxName.textContent = '';
    lightboxRole.textContent = '';
    lightboxQuote.textContent = '';
    lightboxCompany.textContent = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
      lightboxName.textContent = '';
      lightboxRole.textContent = '';
      lightboxQuote.textContent = '';
      lightboxCompany.textContent = '';
    }
  });
});
