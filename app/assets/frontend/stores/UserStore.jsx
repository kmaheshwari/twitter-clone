import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import AppEventEmitter from './AppEventEmitter';

let _users = [];
let _followedIds = [];

class UserEventEmitter extends AppEventEmitter {
  getAll() {
    return _users;
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
  switch (action.actionType) {
    case ActionTypes.RECIEVED_USERS:
      _users = action.rawUsers;
      UserStore.emitChange();
      break;
    case ActionTypes.RECIEVED_ONE_FOLLOWER:
      _followedIds.push(action.rawFollower);
      UserStore.emitChange();
      break;
    default:

  }
})

export default UserStore;
