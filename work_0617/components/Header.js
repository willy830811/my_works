import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

const linkStyle = {
	marginRight: 15
}

class Item extends React.Component {
	render() {
		return (
			<div className={"col-sm-4 text-center btn btn-sm btn-outline-"+this.props.style}>
				<Link href={this.props.href} >
					<a style={linkStyle}>{this.props.name}</a>
				</Link>
			</div>
		)	
	}	
}


const Header = () => (
	<div>
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous" />
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

		<div className="container p-3">
			<div className="row">
				<Item href="/" name="首頁" style="warning"/>
				<Item href="/change_currency" name="換匯" style="success"/>
				<Item href="/check_currency" name="查匯率" style="danger"/>
			</div>
		</div>
	</div>
)

export default Header;