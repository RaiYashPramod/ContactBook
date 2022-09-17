import { createContext, useReducer } from "react";

export const ContactContext = createContext();

export const contactReducer = (state, action) => {

    switch (action.type) {
        case 'SET_CONTACT':
            return {
              contacts: action.payload  
            }
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((c) => c._id !== action.payload._id)
            }
        case 'CREATE_CONTACT':
            return {
                contacts: [action.payload]
            }
        case 'REDIRECT':
            return {
                contact: action.payload
            }
        default:
            return state;
    }
}


export const ContactContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactReducer, {contact: null});

    return (
        <ContactContext.Provider value={{...state, dispatch}} >
            {children}
        </ContactContext.Provider>
    )
}