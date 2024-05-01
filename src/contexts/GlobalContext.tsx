import React from 'react'
import { getThemeFromStorage } from 'styles/theme/utils';

const initialState = {
    theme: {
        selected: getThemeFromStorage() || 'system'
    },
    designSystemDispatch: ()=>{}
}

const DesignSystemContext = React.createContext<typeof initialState | null>(null);

const reducer = (state, action) =>{
    switch(action.type){
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: {
                    ...state.theme,
                    selected: action.payload
                }
            }
    }
}

export const DesignSystemProvider = ({children})=>{
const [state, dispatch] = React.useReducer(reducer, initialState)
    return <DesignSystemContext.Provider value={
   {     
    ...state,
    designSystemDispatch: dispatch as any
}
    }>
        {children}
    </DesignSystemContext.Provider>
  }