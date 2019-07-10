import { combineReducers } from 'redux'

let response_default = [{
	name: null,
	event: [
		{
			title: null
		}
	]
}]

const browsing_mode = (state = 'list', action) => {
	switch (action.type) {
		case 'TOGGLE_MODE':
			return state === 'list' ? 'map' : 'list'
		default:
			return state
	}
}

const data = (state = response_default, action) => {
	switch (action.type) {
		case 'DOWNLOAD_DATA':
			return action.raw_data
		default:
			return state
	}
}

const data_now = (state = {index_marker: 0, index_shop: 0, index_coupon: 0}, action) => {
	switch (action.type) {
		case 'SELECT_MARKER':
			console.log(action.index);
			return Object.assign({}, state, {index_marker: action.index})
		case 'SELECT_SHOP':
			return Object.assign({}, state, {index_shop: action.index})
		case 'SELECT_COUPON':
			console.log('1');
			return Object.assign({}, state, {index_coupon: action.index})
		default:
			return state
	}
}

const page_now = (state = 'shop_list', action) => {
	switch (action.type) {
		case 'PREVIOUS_PAGE':
			switch (state) {
				case 'shop_list':
					return 'shop_list'
				case 'coupon_list':
					return 'shop_list'
				case 'coupon_content':
					return 'coupon_list'
				default:
					return state
			}
		case 'NEXT_PAGE':
			switch (state) {
				case 'shop_list':
					return 'coupon_list'
				case 'coupon_list':
					console.log('2');
					return 'coupon_content'
				case 'coupon_content':
					return 'coupon_content'
				default:
					return state
			}
		default:
			return state
	}
}

export default combineReducers({
	browsing_mode,
	data,
	data_now,
	page_now
})