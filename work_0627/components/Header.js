import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

import { previousPage } from '../actions'


class Header extends React.Component {
	render() {
		let previousPage = this.props.previousPage;

		let title = () => {
			switch (this.props.page) {
				case 'shop_list':
					return '好康多'
				case 'coupon_list':
					return '優惠項目'
				case 'coupon_content':
					return '優惠內容'
				default:
					return null
			}
		}

		let menu_icon = () => {
			switch (this.props.page) {
				case 'shop_list':
					return <img src="/static/slidemenu.svg" className="position-absolute" style={{height: '18px'}} />
				case 'coupon_list':
					return <img src="/static/back-btn.svg" className="position-absolute" style={{height: '18px', left: '11px'}} />
				case 'coupon_content':
					return <img src="/static/back-btn.svg" className="position-absolute" style={{height: '18px', left: '11px'}} />
				default:
					return null
			}
		}

		return (
			<div className="position-fixed" style={{top:'0', height: '48px', width: '100%', backgroundColor: '#bf3829', zIndex: '2'}}>
				<span className="position-absolute" style={{top: '15px', left: '0'}} onClick={() => previousPage()}>{menu_icon()}</span>
				<span className="position-absolute" style={{top: '5px', left: '24px'}}><img src="/static/app_logo.png" style={{height: '61px', width: '58px'}} /></span>
				<span className="position-absolute" style={{top: '12px', left: '91px', fontSize: '17px', color: '#FFF'}}>{title()}</span>
				<span className="position-absolute" style={{top: '15px', right: '31px'}} onClick={() => {previousPage(); previousPage();}}><img src="/static/home.svg" className="position-absolute" style={{height: '19px'}} /></span>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	page: state.page_now
})

const mapDispatchToProps = dispatch => ({
	previousPage: () => dispatch(previousPage())
})


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)