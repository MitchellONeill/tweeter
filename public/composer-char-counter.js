console.log('this file loaded');
// $(function() {
//   var maxC = 140
//   var counter = 140;
//   var tweetLength = $('textarea').val().length;
//   console.log(tweetLength);
//   //$('.counter').val(counter - tweetLength);
//   $('textarea').on('change', function(event) {
//     $(this).closest('counter').val(counter - tweetLength);
//   });
//   if (tweetLength > 140) {
//     $('.counter').addClass('countWarn');
//   } else {
//     $('.counter').removeClass('countWarn');
// });

$(function() {
  $('textarea').on('focus', function(){
    console.log("event catch working");
  });
});