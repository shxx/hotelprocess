import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true
}

export default function employeeList(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_EMPLOYEE_LIST_REQUEST: 
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_EMPLOYEE_LIST_SUCCESS:
			// return{
			// 	 ...state,
   //              loading: false,
			// 	employeeList: action.employeeList
			// }
			return Object.assign({}, state, {employeeList: action.employeeList,loading: false});
		case actionTypes.GET_EMPLOYEE_LIST_ONLINE_SUCCESS:
			// return{
			// 	 ...state,
   //              loading: false,
			// 	onLineemployeeList: action.onLineemployeeList
			// }
			return Object.assign({}, state, {onLineEmployeeList: action.onLineEmployeeList,loading: false});
		case actionTypes.GET_EMPLOYEE_LIST_FAILURE:
			return{
				 ...state,
                loading: false
			}
		default:
			return state;
	}
}