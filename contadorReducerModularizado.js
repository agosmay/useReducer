import React , { useReducer } from 'react';
import '../hojas-de-estilo/ContadorConReducer.css'
import reducerContador from '../reducer/reducer'
import { INCREMENT, DECREMENT } from '../types/types'


const ContadorConReducer  = () => {
	
	const initialState = 0;
	
	let action = {
		type: ""
		
	}
	
		const handleAumento = () => {
		
		dispatch( action = {
			type: INCREMENT
			
			
		})
		
	}
	
	const handleDecremento = () => {
		
		dispatch( action = {
			type: DECREMENT
		})
		
	}
	
	
	

	
	const [state , dispatch] = useReducer(reducerContador, initialState);
	
	return (
		<>
			<div className="letra">Contador Con REDUCER </div>
			<h1 className="letra">{state}</h1>
			<button onClick={handleAumento}>Aumentar</button>
			<button onClick={handleDecremento}>Decrementar</button>
		</>
	
	);
}


export default ContadorConReducer;
