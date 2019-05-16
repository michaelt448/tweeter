/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 $(document).ready(function(){

  // pete: I would use a more specific selector here, this could lead to bugs later
  const button = $('input');
  const textObj = $('textarea');

  //Main function, all other functions start from here 
  button.on('click',function(e) {
    e.preventDefault();
    $('.error').slideUp();
    if(Number($('.counter').text()) < 0) {
        $('.error').slideDown();
        $('.error').text('You are over character limit');
    }
    else if(Number($('.counter').text()) === 140) {
        $('.error').slideDown();
        $('.error').append('Cannot submit empty message');
    }
    else {
        $.ajax( {
            type : 'POST',
            url : '/tweets',
            data : textObj.serialize() 
        })
        .then(function() {
          console.log('successfully posted');
          $('#tweet-container').empty();
          dataLoaded(renderTweets);
        })
        textObj.val('');
        textObj.focus();
        $('.counter').text('140');
    }
 });


 const dataLoaded = function(callback) {
    // pete: if you use the success/error attributes for the object you pass to ajax you can handle errors right there
  $.ajax({
    type: 'GET',
    url : '/tweets',
    dataType : 'JSON'
  })
  .done(function(tweets) {
     callback(tweets);
  })
};

function renderTweets(tweets) {
  console.log(tweets);
  for(let i = tweets.length - 1 ; i >= 0; i--) {
      console.log(tweets[i]);
      let currentArticle = createTweetElement(tweets[i]);
      $('#tweet-container').append(currentArticle);
  }
};

// pete: this is indented incorrectly
  const createTweetElement = (singleTweet) => {
    // why use toggleClass when creating a tweet? just use addClass
    const newArticle = $('<article>').addClass('tweet');

    const header = makeHeader(singleTweet);
    const parag = makeTweetParag(singleTweet);
    const footer = makeFooter(singleTweet);

    return newArticle.append(header, parag, footer);
 }

 const makeHeader = (singleTweet) => {
    const header = $('<header>').addClass('tweet-header');

    // pete: the way you did this with templating is fine but a better choice might be using the .attr method
    // also object destructuring would clean up a lot of these long property acess
    const headImg = $(`<img src = ${singleTweet.user.avatars.small}>`).addClass("tweet-icon");
    const name = $('<h3>').addClass('name').text(singleTweet.user.name);
    const userName = $('<p>').addClass('username').text(singleTweet.user.handle);

    return header.append(headImg, name, userName);
 }

 const makeTweetParag = (singleTweet) => {
    return $('<p>').addClass('tweet-text').text(singleTweet.content.text);
 }

 const makeFooter = (singleTweet) => {
    const footer = $('<footer>').addClass('tweet-footer');

    const footParag = $('<p>').text(moment(singleTweet.created_at).fromNow());

    return footer.append(footParag);
 }

 dataLoaded(renderTweets);

});