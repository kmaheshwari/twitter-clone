import AppDispatcher from '../dispatcher';
import ActionTypes from "../constants";

export default {
  recievedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_TWEETS,
      rawTweets
    })
  },
  recievedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_ONE_TWEET,
      rawTweet
    })
  },
  recievedUsers(rawUsers) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_USERS,
      rawUsers
    })
  },
  recievedOneFollower(rawFollower) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_ONE_FOLLOWER,
      rawFollower
    })
  }
}
