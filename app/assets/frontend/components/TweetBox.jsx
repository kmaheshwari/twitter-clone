export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="row">
        <form>
          <div className="input-field">
            <label>What's up??</label>
            <textarea className= "materialize-textarea" />
            <button className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}