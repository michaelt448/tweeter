/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){

  const button = $('input');
  const textObj = $('textarea');

  //Main function, when button is clicked start here

  const loadData = (callback) => {
    $.get('/tweets',null,(tweets) => {
      callback(tweets);
    });
  };

  const renderTweets = (tweets) => {
    const revTweets = tweets.reverse();
    for(tweet of revTweets) {
        $('#tweet-container').append(createTweetElement(tweet));
    };
  };

  const createTweetElement = (singleTweet) => {
    const newArticle = $('<article>').addClass('tweet');

    const header = makeHeader(singleTweet);
    const parag = makeTweetParag(singleTweet);
    const footer = makeFooter(singleTweet);

    return newArticle.append(header, parag, footer);
 };

 const makeHeader = (singleTweet) => {
    const header = $('<header>').addClass('tweet-header');

    const headImg = $(`<img src = ${singleTweet.user.avatars.small}>`).addClass('tweet-icon');
    const name = $('<h3>').addClass('name').text(singleTweet.user.name);
    const userName = $('<p>').addClass('username').text(singleTweet.user.handle);

    return header.append(headImg, name, userName);
 };

 const makeTweetParag = (singleTweet) => {
    return $('<p>').addClass('tweet-text').text(singleTweet.content.text);
 };

 const makeFooter = (singleTweet) => {
    const footer = $('<footer>').addClass('tweet-footer');

    const footParag = $('<p>').text(moment(singleTweet.created_at).fromNow());
    const footFlag = $('<img src = "http://simpleicon.com/wp-content/uploads/flag.png">').addClass('icon');
    const footLike = $('<img src = "https://www.freeiconspng.com/uploads/youtube-like-button-png-11.png">').addClass('icon');
    // const footLikeButton = $('<button>').addClass('likeButton').attr('data-likes','0').append(footLike);
    const footRetw = $('<img src = "https://image.flaticon.com/icons/png/512/127/127998.png">').addClass('icon');

    return footer.append(footParag,footFlag,footLike,footRetw);
 };

  // This function is called upon website loaded first time or refreshed
 loadData(renderTweets);

 // This is function is called upon posting tweet
 button.on('click',function(e) {
  e.preventDefault();
  const inputText = textObj.val().trim();
  $('.error').empty();
  if(Number($('.counter').text()) < 0) {
    $('.error').slideDown();
    $('.error').text('You are over character limit');
  }
  else if(inputText === '') {
    $('.error').slideDown();
    $('.error').append('Cannot submit empty message');
  }
  else {
    $('.error').slideUp();
    $.post( '/tweets',textObj.serialize(), () => {
      $('#tweet-container').empty();
      loadData(renderTweets);
    });
    textObj.val('');
    textObj.focus();
    $('.counter').text('140');
  }
});
});