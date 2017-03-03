import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true
}

export default function employeeDesc(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_EMPLOYEEDESC_REQUEST: 
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_EMPLOYEEDESC_SUCCESS:
			return{
				 ...state,
                loading: false,
				employeeDesc: action.employeeDesc
			}
			//return Object.assign({}, state, {allOrder: action.allOrder,loading: false});
		case actionTypes.GET_EMPLOYEEDESC_FAILURE:
			return{
				 ...state,
                loading: false
			}
		default:
			return state;
	}
}