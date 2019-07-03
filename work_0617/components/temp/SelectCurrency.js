import React from 'react';
import ReactDOM from 'react-dom';

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

export default SelectCurrency