$(document).ready(function() {

  var balance;

  function getData() {
    $.ajax({url:'/balance'}).done(function(data) {
      balance = data;
    });
  };

  getData();

  $('button').on('click', function() {
    $('p').html(balance);
  });
});
