

 $(function(){

  loadTweets();

  function loadTweets() {
      $.ajax({
        url: '/tweets',
        method: 'GET',
        dataType: 'json',
        success: function (tweets) {
          console.log('do we get here' + tweets)
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
    var body = $("<p>").addClass("tweetBody").text(tweets.content.text);
    var date = $("<span>").addClass("date").text(tweets.created_at);
    var twitLogos = $("<img src='heart.png'>").addClass("twitLogos");
    fullTweet.append(header);
    header.append(userLogo).append(user).append(userID);
    fullTweet.append(body);
    fullTweet.append(footer);
    footer.append(date).append(twitLogos);
    console.log(fullTweet);
    return fullTweet;
    };

    function sendTweet (tweetBody) {
      if (tweetBody.length === '' || tweetBody.length > 140) {
        alert("test message");
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
    });

 });
