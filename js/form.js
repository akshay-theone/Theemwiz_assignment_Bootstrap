document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.needs-validation');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent default submit to avoid page reload
    form.classList.add('was-validated');

    if (form.checkValidity()) {
      // form is valid, you can submit or do other actions
      alert('Form submitted!');
      form.reset();
      form.classList.remove('was-validated');
    }
  });
});
