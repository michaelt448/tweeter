/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 $(document).ready(function(){
   //const button = $("input");
 const createTweetElement = (singleTweet) => {
  const newArticle = $('<article>').toggleClass('tweet');

  const fullHeader = makeHeader(singleTweet);
  const fullParagr = makeTweetParag(singleTweet.content.text);
  const fullFooter = makeFooter(singleTweet);

  return newArticle.append(fullHeader, fullParagr, fullFooter);
 }

 const makeHeader = (singleTweet) => {
    const newTweeterHead = $('<header>').toggleClass('tweet-header');

    const newTweeterHeadImg = $(`<img src = ${singleTweet.user.avatars.small}>`).toggleClass("tweet-icon");
    const newTweeterName = $('<h3>').toggleClass('name').text(singleTweet.user.name);
    const newTweeterUserName = $('<p>').toggleClass('username').text(singleTweet.user.handle);

    return newTweeterHead.append(newTweeterHeadImg,newTweeterName,newTweeterUserName);
 }

 const makeTweetParag = (textInput) => {
    return $('<p>').toggleClass('tweet-text').text(textInput);
 }

 const makeFooter = (singleTweet) => {
    const newTweeterFooter = $('<footer>').toggleClass('tweet-footer');

    const newTweeterFootParag = $('<p>').text(moment(singleTweet.created_at).fromNow());

    return newTweeterFooter.append(newTweeterFootParag);
 }

  function renderTweets(tweets) {
    console.log(tweets);
    for(let i = tweets.length - 1 ; i >= 0; i--) {
      console.log(tweets[i]);
      let currentArticle = createTweetElement(tweets[i]);
      $('#tweet-container').append(currentArticle);
    }
  }

  const dataLoaded = function(callback) {
    $.ajax({
      type: 'GET',
      url : '/tweets',
      dataType : 'JSON'
    })
    .done(function(tweets) {
       callback(tweets);
    })
  };

  // button.on('click',function(e) {
  //   $('#tweet-container').empty();
  //   e.preventDefault();
  //   dataLoaded();
  //   // dataLoaded();
  // })


  const button = $('input');
  const textObj = $('textarea');
  button.on('click',function(e) {
     e.preventDefault();
      $('.error').slideUp();
      if($('.counter').text() < 0) {
          $('.error').slideDown();
          $('.error').text('You are over character limit');
      }
      else if($('.counter').text() == 140) {
          $('.error').slideDown();
          $('.error').append('Cannot submit empty message');
      }
      else {
          $.ajax( {
              type : 'POST',
              url : '/tweets',
              data : $('textarea').serialize() 
          })
          .then(function() {
            console.log('successfully posted');
            $('#tweet-container').empty();
            // e.preventDefault();
            dataLoaded(renderTweets);
          })
          $('textarea').val('');
          $('textarea').focus();
          $('.counter').text('140');
      }
  });
});