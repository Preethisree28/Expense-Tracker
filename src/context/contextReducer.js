
const contextReducer = (state, action) => {
    let transactions;
switch (action.type) {
    case 'DELETE_TRANSACTION':
     transactions = state.filter((transaction) => transaction.id !== action.payload );
    //  implementing local storage
     localStorage.setItem('transactions', JSON.stringify(transactions)) ;

     return transactions;
   
     case 'ADD_TRANSACTION':
     transactions = [action.payload, ...state];
     localStorage.setItem('transactions', JSON.stringify(transactions)) ;
    return transactions;

    default:
       return state;
}
}

export default contextReducer;

// in case of delete the transaction id is taken off
// in case of add the transaction payload is added

// reducer is a single func that specifies how we will be changing our state and is an alt for state
// Reducer a function that takes in the old state and an action => new state