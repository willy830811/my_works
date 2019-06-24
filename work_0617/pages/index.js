import Header from '../components/Header';

//import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.min.js';

function Home() {
	return (
		<div className="text-center">
			<Header />
			<img src="/static/okane.png" alt="my image" />
			<p className="text-center">歡迎使用匯率計算機</p>
		</div>
	)
}

export default Home