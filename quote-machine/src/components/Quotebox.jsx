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
		console.log("randomQuote called")
		console.log(localStorage)
		//let quoteList = audre_lorde_quotes.quotes;
		/*quoteList.map((quote, idx) => {
			localStorage.setItem(idx, JSON.stringify(quote));
		}) */
		let randomIdx = Math.floor(Math.random() * 10);
		let randomQuote = JSON.parse(localStorage.getItem(randomIdx));
		console.log("randomQuote: ", randomQuote)
		//let randomQuote = quoteList[randomIdx]
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
