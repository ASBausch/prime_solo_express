$(document).ready(function() {

  var balance;

  function getData() {
    $.ajax({url:'/balance'}).done(function(data) {
      balance = data;
    });
  };

  getData();

  $('button').on('click', function() {
    var p = $('p').html(balance);
    p.animate({left: '300px'}, '3000');
    p.animate({fontSize: '3em'}, 'slow');
    getData();
  });

});
