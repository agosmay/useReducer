import React , { useReducer } from 'react';
import '../hojas-de-estilo/ContadorConReducer.css'


const ContadorConReducer  = () => {
	
	const initialState = 0;
	
	let action = {
		type: ""
		
	}
	
		const handleAumento = () => {
		
		dispatch( action = {
			type: "increment"
			
			
		})
		
	}
	
	const handleDecremento = () => {
		
		dispatch( action = {
			type: "decrement"
		})
		
	}
	
	const reducerContador = (initialState , action) => {
		switch(action.type) {
			case "increment" :
				return initialState + 1;
			case "decrement" :
				return initialState - 1;
			default:
			return initialState;
		}	
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