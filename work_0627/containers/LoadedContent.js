import React from 'react'

import { connect } from 'react-redux'
import CouponContent from '../components/CouponContent'
//import { toggleMode } from '../actions'


//let index = 0;
//let n = 0;

const mapStateToProps = state => ({
	coupon: state.data[state.data_now.index_shop].event,
	content: state.data[state.data_now.index_shop].event[state.data_now.index_coupon]
})

/*
const mapDispatchToProps = dispatch => ({
  toggleMode: id => dispatch(toggleTodo(id))
})
*/

export default connect(
	mapStateToProps
)(CouponContent)