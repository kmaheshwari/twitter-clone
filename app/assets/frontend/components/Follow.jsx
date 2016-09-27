import React from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import { Link } from 'react-router';

let getAppState = () => {
  return {users: UserStore.getAll() };
}
export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    UserActions.getAllUsers();
    UserStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAppState());
  }
  followUser(userId) {
    UserActions.followUser(userId);
  }
  render() {
    let users = this.state.users.map( user => {
      return (
          <li key = {user.id} className="collection-item avatar">
            <img className="circle" src={user.gravatar} />
            <span className="title">{ user.name }</span>
            <a className="secondary-content btn-floating grey"
              onClick={this.followUser.bind(this, user.id)}>
              <i className="material-icons">Person pin</i>
            </a>
          </li>
      )
    });
    return (
      <div>
        <h3>Who to follow</h3>
        <ul className="collection">
          { users }
        </ul>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}
