// Core
import { createContext } from 'react';

// Store
import { store } from './mobx';

export const Context = createContext(store);

export const Provider = (props) => {
    return (
        <Context.Provider value = { store }>
            { props.children }
        </Context.Provider>
    );
};
