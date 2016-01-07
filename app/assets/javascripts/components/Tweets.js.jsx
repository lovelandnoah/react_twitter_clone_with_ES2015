class Tweets extends React.Component{
  constructor(props){
    super(props);
    this.newTweet = this.newTweet.bind(this);
    this.search = this.search.bind(this);
    this.state = { tweets: [] } ;
  }

  search(){
  	$.ajax({
  		url: '/tweet_search',
  		type: 'GET',
  		data: { search_term: this.refs.search.value }
  	}).success( data => {
  		this.setState({ tweets: data.tweets });
  	});
  }

  componentDidMount(){
  	$.ajax({
  		url: '/tweets',
  		type: 'GET',
  	}).success( data => {
  		this.setState({ tweets: data.tweets });
  	});
  }

  newTweet(){
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: { tweet: { body: this.refs.newTweet.value }}
    }).success( data => {
      let tweets = this.state.tweets;
      tweets.unshift(data.tweet);
      this.refs.newTweet.value = null;
      this.setState({ tweets: tweets });
    }).error( data => {
      console.log('error');
    });
  }

  render(){
  	let tweets = this.state.tweets.map( tweet => {
  		let key = `tweet-${tweet.id}`;
  		return(<Tweet key={key} {...tweet} />);
  	});
    return(<div className="container">
    				<br />
            <input placeholder="What's on your mind?" ref="newTweet" autoFocus={true} />
            <button className="btn green" onClick={this.newTweet}>Post</button>
            <input placeholder="Search" ref='search' onChange={this.search} />
            <hr />
            <h1 className='center-text'>Tweets</h1>
            <hr />
            {tweets}
          </div>);
  }
}
