import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true
}

export default function person(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_PERSON_REQUEST: 
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_PERSON_SUCCESS:
			return{
				 ...state,
                loading: false,
				person: action.person
			}
			//return Object.assign({}, state, {person: action.person,loading: false});
		case actionTypes.GET_PERSON_FAILURE:
			return{
				 ...state,
                loading: false
			}
		default:
			return state;
	}
}