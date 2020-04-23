// by convention, when we export plain function from this file
// we make the filename lower case
// this file automates context creation for different resources
import React, { useReducer } from 'react'

export default (reducer, actions, initialState) => {
    const Context = React.createContext()

    // children is unrelated to context, dif feature in react
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const boundActions = {}

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider }
}