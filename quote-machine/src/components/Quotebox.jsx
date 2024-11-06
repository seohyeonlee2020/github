import React from "react";
import audre_lorde_quotes from "../data/audre_lorde_quotes.json";

class Quotebox extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			quote: '',
			source: ''
		}
	}

	randomQuote = () => {
		let quoteList = audre_lorde_quotes.quotes;
		let randomIndex = Math.floor(Math.random() * quoteList.length);
		let randomQuote = quoteList[randomIndex];
		this.setState({quote: randomQuote.quote, source: randomQuote.source});
	}

	render() {
		return(
			<div>
			<div id="text">{this.state.quote}</div>
			<div id="source">{this.state.source}</div>
			<button onClick={this.randomQuote} id="new-quote">New Quote</button>
		</div>
		)
	}
}

export default Quotebox;
