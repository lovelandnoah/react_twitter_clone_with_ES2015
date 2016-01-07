class Tweet extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(<div>
						 <div className="card blue-grey lighten-1">
						 	 <div className="card-content white-text">
						 	 	 <p>{this.props.body}</p>
						 	 </div>
						 	 <div className="card-action">
						 	 	 <a onClick={this.userTweets}>{this.props.handle}</a>
						 	 </div>
						 </div>
					 </div>)
	}
}