import React,{ useReducer, createContext} from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) ||[{"amount":500,"category":"Salary","type":"Income","date":"2022-05-25","id":"35480db9-a980-4f63-b896-046505110b02"},{"amount":200,"category":"Food","type":"Expense","date":"2022-05-26","id":"bc1e1bd2-1319-4c15-a1d8-b402af70d31a"},
];


export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action creators
    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});
    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload:transaction});
    const balance = transactions.reduce((acc,currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);
    // when you have a lot of values in an array and want to sum it down to one value it is reduce(), here acc is set to 0.

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

// the obj deleteTransaction: deleteTransaction can be written as deleteTransaction