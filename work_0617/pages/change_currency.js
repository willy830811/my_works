import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header';
import {check} from '../components/Get_rate';
import {all_rate} from '../components/Get_rate';


check();

let howMuch;
let new_howMuch;
let selected_rate;
let currencyA = 'EUR';
let currencyB = 'EUR';
let currencies = {};


class SelectCurrency extends React.Component {
	constructor(props) {
		super(props);
		this.state = {currency: 'nothing'};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		currencies[this.props.order] = event.target.value;
		if (currencies.first && currencies.second) {
			selected_rate = all_rate.rates[currencies.first]/all_rate.rates[currencies.second];
		}
	}

	render() {
		let temp_arr = [<option value="nothing">請選擇</option>];
		for (let item in all_rate.rates) {
			temp_arr.push(<option value={item}>{item}</option>);
		}
		return <select onChange={this.handleChange}>{temp_arr}</select>;
	}
}


class InputCurrency extends React.Component {
	constructor(props) {
		super(props);
		this.state = {amount: 0};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const howMuch = event.target.value;
		console.log(selected_rate);

		new_howMuch = howMuch/selected_rate;

		this.setState({amount: new_howMuch});
	}

	render() {
		return (
			<div>
				請輸入您想要換匯的金額<br />
				<input type="text" onChange={this.handleChange} /><span>{}</span><br />
				總共可換成<br />
				<input type="text" readonly="readonly" value={this.state.amount}/>
			</div>
		)
	}
}


class ChangeCurrency extends React.Component {
	constructor(props) {
		super(props);
	}



	

	render() {
		return (
			<div className="text-center p-3">
				我想要將
				<SelectCurrency order="first" />
				換成
				<SelectCurrency order="second" />
				<br />
				<InputCurrency currency={this} />
			</div>
		)
	}
}


/*
function change_currency() {
	return (
		<div ya="xxx">
			<Header />


			<div className="text-center p-3">
				<p className="m-0">我想要將
				<select id="currencyA" onChange={renewCurrency}>
					<option value="nothing">請選擇</option>
					<option value="EUR">歐元</option>
					<option value="JPY">日圓</option>
					<option value="USD">美金</option>
				</select>
				換成
				<select id="currencyB" onChange={renewCurrency}>
					<option value="nothing">請選擇</option>
					<option value="EUR">歐元</option>
					<option value="JPY">日圓</option>
					<option value="USD">美金</option>
				</select>
				</p>

				<br />

				請輸入您想要換匯的金額
				<br />
				<input id="howMuch_input" type="text" onChange={change} /><span id="currencyA_2"></span>
				<br />
				總共可換成
				<br />
				<input id="new_input" type="text" readonly="readonly"/><span id="currencyB_2"></span>


			</div>
		</div>
	)
}



function renewCurrency() {
	if (document.getElementById('currencyA').value != 'nothing' && document.getElementById('currencyB').value != 'nothing') {
		currencyA = document.getElementById('currencyA').value;
		currencyB = document.getElementById('currencyB').value;

		document.getElementById('currencyA_2').innerHTML=currencyA;
		document.getElementById('currencyB_2').innerHTML=currencyB;

		selected_rate = all_rate.rates[currencyB]/all_rate.rates[currencyA];
		console.log(selected_rate);
	}
}

function change() {
	howMuch = document.getElementById('howMuch_input').value;
	let new_howMuch = howMuch*selected_rate;
	console.log(new_howMuch);
	document.getElementById('new_input').setAttribute('value', new_howMuch);
}
*/


function change_currency_app() {
	return (
		<div>
			<Header />
			<ChangeCurrency />
		</div>
	)
}

export default change_currency_app
//ReactDOM.render(<ChangeCurrency />, document.getElementById('app'));