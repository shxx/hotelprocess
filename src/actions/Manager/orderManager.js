
import * as actionTypes from '../../constants/types';
import {refetch} from '../../utils/refetch.js';

/**
 * [管理员获取所有分配订单]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getManagerOrders = (params) => {
	params = {
		...params
	}
	return (dispatch) => {
		return refetch({
		  method: 'get',
		  url : '/mock/managerOrderList.json',
		  success: function(data){
		  	let oData = data.data.orderData,
		  		aData = [];
			oData.map((item, i) => {
				if(item.orderStatus == params.orderStatus){
					aData.push(item);
				}
			})
			dispatch({
				type:actionTypes.GET_MANAGER_ORDER_SUCCESS,
				managerOrder: aData
			})
		  },
		  fail: function(msg){
		  },
		  error: function(msg){
		  }
		})
	}
}

/**
 * [获取所有员工]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getEmployeeList = (params) => {
	params = {
		...params
	}
	return (dispatch,getState) => {
		let state = getState();
		let aEmployeeList = state.employeeList.employeeList,
			length = aEmployeeList && aEmployeeList.length || 0;
		if(length > 0){
			if(params.type == 'all'){
				return dispatch({
					type:actionTypes.GET_EMPLOYEE_LIST_ONLINE_SUCCESS,
					onLineEmployeeList: aEmployeeList
				})

			}else if(params.type == 'online'){
				let onLineEmployee = [];
				aEmployeeList.map((item,index) => {
					if(item.employeeWorkStatus == '工作中'){
						onLineEmployee.push(item);
					}
				})
				return dispatch({
					type:actionTypes.GET_EMPLOYEE_LIST_ONLINE_SUCCESS,
					onLineEmployeeList: onLineEmployee
				})
			}
		}else{
			return refetch({
			  method: 'get',
			  url : '/mock/employeeList.json',
			  success: function(data){
				dispatch({
					type:actionTypes.GET_EMPLOYEE_LIST_SUCCESS,
					employeeList: data.data.employeeData
				})
			  },
			  fail: function(msg){
			  },
			  error: function(msg){
			  }
			})
		}
	}
}