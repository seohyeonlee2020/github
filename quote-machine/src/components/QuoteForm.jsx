import React from "react";
class QuoteForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			quote: '',
			source: ''
		}
	}

	saveToLocalStorage = () => {
		console.log("saveToLocalStorage called")
		//input validation
		//quote must not be empty. source goes in as "Unknown" if entered empty
		//make an index
		//use said index as key
		let idx = new Date();
		console.log("idx", idx)
		const quote = document.getElementById("quote-text-input").va
		console.log("quote", quote)
		localStorage.setItem(idx, JSON.stringify({"quote": quote,"source": source}))
	}

	render(){
		return (<>
			<form id="input-box">
				<input id="quote-text-input" type="text" placeholder="Text"></input>
				<input id="source-text-input" type="text" placeholder="Author/Source"></input>
				<button onSubmit={this.saveToLocalStorage} id="submit-quote">Add Quote</button>
			</form>
		</>)
	}
}

export default QuoteForm;
