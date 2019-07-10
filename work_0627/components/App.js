import React from 'react'
import { connect } from 'react-redux'

import Head from 'next/head'

import Header from './Header'
import LoadedShop from '../containers/LoadedShop'
import LoadedCoupon from '../containers/LoadedCoupon'
import LoadedContent from '../containers/LoadedContent'

import ShopMap from './ShopMap'



class App extends React.Component {
	render() {
		let page_now = () => {
			switch (this.props.page) {
				case 'shop_list':
					switch (this.props.mode) {
						case 'list':
							return <LoadedShop />
						case 'map':
							return <ShopMap />
					}
				case 'coupon_list':
					return <LoadedCoupon />
				case 'coupon_content':
					return <LoadedContent />
			}
		}


		if (typeof document !== 'undefined') {
			(function(d) {
				let config = {
				kitId: 'adl2erw',
				scriptTimeout: 3000,
				async: true
				},
				h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
			})(document);
		}
		

		return (
			<div>
				<Head>
					<title>好康多</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				</Head>
				<div style={{fontFamily: 'source-han-sans-traditional, sans-serif', fontStyle: 'normal', fontWeight: '100', backgroundColor: '#f4f4f4', height: '100vh'}}>
					<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
					<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossOrigin="anonymous"></script>
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<Header />
					
					{page_now()}
				</div>
			</div>
		)
	}
}
//<div style={{height: '48px'}}></div>


const mapStateToProps = state => ({
	page: state.page_now,
	mode: state.browsing_mode
})



export default connect(
	mapStateToProps,
	null
)(App)