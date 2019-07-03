import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from '../components/Header';


class SelectCurrency extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		//this.state = {order: this.props.order}
	}

	handleChange(event) {
		const order = this.props.order;
		const selected = event.target.value;
		this.props.onChange(selected, order);
	}

	render() {
		let temp_arr = [<option value="">請選擇</option>];
		let all_rate = this.props.all_rate;
		for (let item in all_rate.data.rates) {
			temp_arr.push(<option value={item}>{item}</option>);
		}
		return <select onChange={this.handleChange}>{temp_arr}</select>;
	}
}


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


class Exchange extends React.Component {
	constructor(props) {
		super(props);
		this.state = {amount: 0, currency: {first: null, second: null}, selected_rate: null, all_rate: {data: {rates: null}}};
		this.changeSelect = this.changeSelect.bind(this);
		this.changeInput = this.changeInput.bind(this);

	}
	componentDidMount() {
		let self = this;

		axios.get('http://data.fixer.io/api/latest?access_key=e8984e205db89c1c5523644643ed7d28')
		.then(function (response) {
			self.setState({all_rate: response});
		})
		.catch(function (error) {
		})
	}

	changeSelect(selected, order) {
		const currencies = this.state.currency;
		currencies[order] = selected;
		console.log(currencies);
		this.setState({currency: currencies});
		if (currencies.first != null && currencies.second != null) {
			this.setState({
				selected_rate: this.state.all_rate.data.rates[currencies.first]/this.state.all_rate.data.rates[currencies.second]
			})
		}
	}

	changeInput(howMuch) {
		const new_howMuch = howMuch/this.state.selected_rate;
		this.setState({amount: new_howMuch});
	}

	render() {
		return (
			<div className="text-center p-3">
				我想要將
				<SelectCurrency onChange={this.changeSelect} order="first" all_rate={this.state.all_rate} />
				換成
				<SelectCurrency onChange={this.changeSelect} order="second" all_rate={this.state.all_rate} />
				<br />
				<InputCurrency onChange={this.changeInput} amount={this.state.amount} currency={this.state.currency}/>
			</div>
		)
	}
}


function change_currency_app() {
	return (
		<div>
			<Header />
			<Exchange />
		</div>
	)
}


export default change_currency_app
//ReactDOM.render(<Exchange />, document.getElementById('app'));