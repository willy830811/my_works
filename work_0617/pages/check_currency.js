import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from '../components/Header';
//import BarGraph from '../components/BarGraph';
//import hover from '../components/hover.css';


class check_currency extends React.Component {
	constructor(props) {
		super(props);
		this.state = {month_rate: []};
	}

	componentDidMount() {

		let month_rate = [];

		let base = 'EUR';
		let currency = 'JPY';

		let today = new Date();

		let self = this;

		for(let i=0; i<30; i++) {
			let date = new Date();
			let month;
			let day;

			date.setDate(today.getDate()-i);

			let format_date = function() {

				if (date.getMonth()+1 < 10){
					month = '0'+ (date.getMonth()+1);
				} else {
					month = (date.getMonth()+1);
				}

				if (date.getDate() < 10){
					day = '0'+ date.getDate();
				} else {
					day = date.getDate();
				}
				return date.getFullYear()+'-'+month+'-'+day
			}



			axios.get('http://data.fixer.io/api/'+format_date()+'?access_key=e8984e205db89c1c5523644643ed7d28&base='+base+'&symbols='+currency)
			.then(function (response) {
				//self.setState({all_rate: response});
				month_rate.push(response.data.rates[currency]);

				//this.setState({month_rate: month_rate});
			})
			.catch(function (error) {
			})

		}


		
		
			//console.log(month_rate);
		setTimeout(
			function() {
				self.setState({month_rate: month_rate});
			}, 1000
		)
		//console.log(month_rate);
		//console.log(this.state.month_rate);
		//setTimeout(
		//	function() {
		//		console.log(month_rate);
		//		console.log(this.state.month_rate);
		//	}, 1000
		//)
	}

	render() {
		//let today = new Date();
		//let date = today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate();

		return (
			<div>
				<Header />
				<BarGraph month_rate={this.state.month_rate} />
			</div>
		)
	}
}



class BarGraph extends React.Component {


	render() {

		let list = [];

		for (let i=0; i<30; i++) {
			list.push(<SingleBar today_rate={this.props.month_rate[i]} />)
		}

		return (
			<div className="text-center">
				<div className="d-inline-block">
				{list}
				</div>
				<span id="day_rate"></span>
			</div>
		)
	}
}


class SingleBar extends React.Component {
	render() {
		const self = this;
		const height = this.props.today_rate;
		const style = {
			display: 'inline-block',
			verticalAlign: 'bottom',
			backgroundColor: 'red',
			height: height*5,
			width: '20px'
		}

		//const span_style = {
		//	display: 'none'
		//};

		
		//function call_rate(event) {

			//document.getElementByTagName('span').innerText(self.props.today_rate)
			//console.log('yo');
			//console.log(event.target.props.today_rate);
			//event.target.innerText = this.props.today_rate;
		//}
		//console.log(this.props.today_rate);
	//<span className="position-absolute" style={this.span_style}>
//				</span>
		return (
			<div style={style} onMouseOver={function() {console.log(self.props.today_rate)}}>
				<span>
					
				</span>
			</div>
		)
	}
}


export default check_currency