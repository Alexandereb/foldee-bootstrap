$('document').ready(function() {

  //Generic tabs
  $('#tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

});
