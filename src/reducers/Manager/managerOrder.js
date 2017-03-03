import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true
}

export default function managerOrder(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_MANAGER_ORDER_REQUEST: 
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_MANAGER_ORDER_SUCCESS:
			return{
				 ...state,
                loading: false,
				managerOrder: action.managerOrder
			}
			//return Object.assign({}, state, {allOrder: action.allOrder,loading: false});
		case actionTypes.GET_MANAGER_ORDER_FAILURE:
			return{
				 ...state,
                loading: false
			}
		default:
			return state;
	}
}