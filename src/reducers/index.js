import { combineReducers } from 'redux'

import waitingOrder from './Member/waitingOrder';
import receivingOrder from './Member/receivingOrder';
import allOrder from './Member/allOrder';
import person from './Member/person';
import itemList from './User/itemList';
import managerOrder from './Manager/managerOrder';
import employeeList from './Manager/employeeList';
import employeeDesc from './Member/employeeDesc';
import employeeHotelDesc from './Member/employeeHotelDesc';

// 聚合reducer
const rootReducer = combineReducers({
	waitingOrder,
	receivingOrder,
	allOrder,
	person,
	itemList,
	managerOrder,
	employeeList,
	employeeDesc,
	employeeHotelDesc
})

export default rootReducer;