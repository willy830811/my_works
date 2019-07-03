import React from 'react';
import ReactDOM from 'react-dom';

class InputCurrency extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const howMuch = event.target.value;
		this.props.onChange(howMuch);
	}

	render() {
		return (
			<div>
				請輸入您想要換匯的金額<br />
				<input type="text" onChange={this.handleChange} /><span>{this.props.currency.first}</span><br />
				總共可換成<br />
				<input type="text" readonly="readonly" value={this.props.amount}/><span>{this.props.currency.second}</span>
			</div>
		)
	}
}

export default InputCurrency