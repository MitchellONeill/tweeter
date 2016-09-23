
function counter() {
  var tweetLength = $('.message').val().length;
  var remainingChar = 140 - tweetLength;
  if (remainingChar < 0) {
    $('.counter').addClass('countWarn');
  } else {
    $('.counter').removeClass('countWarn');
  }
  $('.counter').text(remainingChar);
};

