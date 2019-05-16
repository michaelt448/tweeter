/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 $(document).ready(function(){
   const button = $("input");
 const createTweetElement = (singleTweet) => {
  // const button = $("input");
  // button.click(function(e) {
  // e.preventDefault();
  // const textObj = $('textarea');
  // const textInput = textObj.val();
  // Create container
  const newArticle = $('<article>').toggleClass('tweet');
//Create children
  const fullHeader = makeHeader(singleTweet);
  const fullParagr = makeTweetParag(singleTweet.content.text);
  const fullFooter = makeFooter(singleTweet);

  return newArticle.append(fullHeader, fullParagr, fullFooter);
// })
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
    // for(tweet in tweets) {
    //   console.log(tweets[tweet]);
    //   let currentArticle = createTweetElement(tweets[tweet]);
    //   $('#tweet-container').prepend(currentArticle);
    // }
    for(let i = tweets.length - 1 ; i >= 0; i--) {
      console.log(tweets[i]);
      let currentArticle = createTweetElement(tweets[i]);
      $('#tweet-container').append(currentArticle);
    }
  }

  const dataLoaded = (function loadTweets() {
    // console.log('I got to load tweets');
    $.ajax({
      type: 'GET',
      url : '/tweets',
      dataType : 'JSON'
    })
    .done(function(tweets) {
       renderTweets(tweets);
    })
  })();

// Fake data taken from tweets.json
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b418s8.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
});