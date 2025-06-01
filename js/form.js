document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.needs-validation');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.classList.add('was-validated');

    if (form.checkValidity()) {
      alert('Form submitted!');
      form.reset();
      form.classList.remove('was-validated');
    }
  });
});
