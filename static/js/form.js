$(document).ready(function(){
  var modal = M.Modal.init($('#success-modal')[0]);

  $("#eval-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      modal.open();
    });
  });
});
