import React from 'react';
import { INCREMENT, DECREMENT }from '../types/types'

const reducerContador = (initialState , action) => {
	switch(action.type) {
		
		
		case INCREMENT :
			return initialState + 1;
		case DECREMENT :
			return initialState - 1;
		default:
		
		return initialState;
		
		
	}
	
	
	
}


export default reducerContador;

