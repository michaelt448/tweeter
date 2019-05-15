/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 $(document).ready(function(){
 const createTweetElement = function(dataBase) {
  const button = $("input");
  button.click(function(e) {
    e.preventDefault();
    const textObj = $('textarea');
    const textInput = textObj.val();

    const newArticle = $('<article>').toggleClass('tweet');

    const newTweeterHead = $('<header>').toggleClass('tweet-header');
    const newTweeterHeadImg = $(`<img src = ${dataBase.user.avatars.small}>`).toggleClass("tweet-icon");
    const newTweeterName = $('<h3>').toggleClass('name').text(dataBase.user.name);
    const newTweeterUserName = $('<p>').toggleClass('username').text(dataBase.user.handle);
    let fullHeader = newTweeterHead.append(newTweeterHeadImg).append(newTweeterName).append(newTweeterUserName);

    const newTweeterParag = $(`<p> ${textInput}</p>`).toggleClass('tweet-text');

    const newTweeterFooter = $('<footer>').toggleClass('tweet-footer');
    const newTweeterFootParag = $('<p>').text(dataBase.created_at);
    let fullFooter = newTweeterFooter.append(newTweeterFootParag);

    let addParagraphToArticle = newArticle.append(fullHeader).append(newTweeterParag).append(fullFooter);
    $('#tweet-container').append(addParagraphToArticle);
  })
 }


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});