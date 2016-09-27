import ServerActions from './actions/ServerActions'

export default {
  getAllTweets() {
    $.get('/tweets')
    .success( rawTweets => ServerActions.recievedTweets(rawTweets) )
    .error(error => console.log(error));
  },
  createTweet(body) {
    $.post('/tweets', { body })
    .success( rawTweet => ServerActions.recievedOneTweet(rawTweet) )
    .error(error => console.log(error));
  }
}
