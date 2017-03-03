import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true
}

export default function employeeHotelDesc(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_EMPLOYEEHOTELDESC_REQUEST: 
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_EMPLOYEEHOTELDESC_SUCCESS:
			return{
				 ...state,
                loading: false,
				employeeHotelDesc: action.employeeHotelDesc
			}
			//return Object.assign({}, state, {allOrder: action.allOrder,loading: false});
		case actionTypes.GET_EMPLOYEEHOTELDESC_FAILURE:
			return{
				 ...state,
                loading: false
			}
		default:
			return state;
	}
}