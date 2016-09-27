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
  },
  getAllUsers() {
    $.get('/followers/random')
    .success( rawUsers => ServerActions.recievedUsers(rawUsers) )
    .error(error => console.log(error));
  },
  followUser(userId){
    $.post('/followers', { user_id: userId })
    .success( rawFollower => ServerActions.recievedOneFollower(rawFollower) )
    .error(error => console.log(error));
  }
}
