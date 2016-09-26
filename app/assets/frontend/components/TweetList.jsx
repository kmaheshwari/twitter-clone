import Tweet from './Tweet';

export default class TweetList extends React.Component {
  render() {
    return (
      <div>
        <ul className="collection">
          <Tweet />
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">Safer Buns</span>
            <p>Tweet 1</p>
          </li>
        </ul>
      </div>
    )
  }
}
