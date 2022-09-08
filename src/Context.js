import React, { createContext, useReducer } from 'react'

export const Context = createContext()

const reducer = (state, pair) => ({ ...state, ...pair })

const initialState = {
	cart:[]
}

export function ContextProvider(props) {
	const [state, setState] = useReducer(reducer, initialState)

	return (
		<Context.Provider value={{ state, setState }}>
			{props.children}
		</Context.Provider>
	)
}