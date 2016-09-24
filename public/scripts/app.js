
//DOM on ready functions
 $(function(){

  loadTweets();

  function loadTweets() {
      $.ajax({
        url: '/tweets',
        method: 'GET',
        dataType: 'json',
        success: function (tweets) {
          renderTweets(tweets);
        }
      })
     }

  function renderTweets(tweets) {
    console.log("and here?", tweets.length)
    for(i in tweets) {
      $('#tweetHistory').append(createTweetElement(tweets[i]));
    }
  }

  function createTweetElement(tweets){
    console.log('please say we are here ? ');
    var fullTweet = $("<article>").addClass("oldTweet");
    var header = $('<header>').addClass('arcHead');
    var footer = $('<footer>');
    var user = $("<h3>").addClass("usrName").text(tweets.user.name);
    var userID = $("<div>").addClass("usrID").text(tweets.user.handle);
    var userLogo = $("<img>").attr("src", tweets.user.avatars.regular).addClass("logo");
    var body = $("<span>").addClass("tweetBody").text(tweets.content.text);
    var date = Date(tweets.created_at);
    date =   date.substring(0,24)
    var date = $("<span>").addClass("date").text(date);

    var twitLogos = $("<img src='turdIcon.jpg'>").addClass("twitLogos");
    header.append(userLogo).append(user).append(userID);
    footer.append(date).append(twitLogos);
    fullTweet.append(header);
    fullTweet.append(body);
    fullTweet.append(footer);
    fullTweet.on('click', function() {
      alert('Tweet, Tweet!');
      });
    return fullTweet;
    };

    function sendTweet (tweetBody) {
      console.log('our length', tweetBody.length)
      if (tweetBody === '') {
        alert("Come on now, this site is for Turds not empty bowls");
      } else if (tweetBody.length > 140) {
        alert("Overflow!! overflow!! less turd please")
      } else {
        var data = {text: tweetBody};
        $.ajax({
          url: '/tweets',
          method: 'POST',
          data: data,
          dataType: 'json',
          success: function (result) {
            $('#tweetHistory').prepend(createTweetElement(result));
         }
        })
      }
    };
    //Event callers//
    $('.message').keyup(counter);
    $('.tweetForm').on("submit", function(e) {
      console.log('we entered the function');
      e.preventDefault();
      var tweetBody = $(this).find('.message').val();
      sendTweet(tweetBody);
      $(this).closest('form').find("input[type=text], textarea").val("");
    });
    $('.composer').click(function(){
      $('h2').toggle("slow");
      $('.tweetForm').toggle("slow", function() {
        $('.message').focus();
        });

    });

 });
