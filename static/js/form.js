$(document).ready(() => {
  let modalSuccess = M.Modal.init($('#modal-success')[0]);
  let modalFailure = M.Modal.init($('#modal-failure')[0]);

  $('#eval-form').submit(function(event) {
    event.preventDefault();

    let form = $(this);
    $.post(form.attr('action'), form.serialize())
      .then(() => modalSuccess.open())
      .catch((error) => {
        $('#message-error').text(`[${error.status}] ${error.statusText}`);
        modalFailure.open();
      });
  });
});
