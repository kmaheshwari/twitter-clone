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
  }
}
