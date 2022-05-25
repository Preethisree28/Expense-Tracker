import {useContext} from 'react';
import {ExpenseTrackerContext} from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

// [
//     {id: 1, type: 'Income', amount: 150, category:'Salary'}
//     {id: 2, type: 'Expense', amount: 50, category:'Pets'}
//     {id: 3, type: 'Income', amount: 50, category:'Salary'}
// ]

const useTransactions = (title) => {
 resetCategories();
 const {transactions} = useContext(ExpenseTrackerContext);
 const transactionsPerType = transactions.filter((t) => t.type === title);
 const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount,0);
 const categories = title === 'Income' ? incomeCategories : expenseCategories;

console.log({transactionsPerType ,total,categories});

transactionsPerType.forEach((t) =>{
    const category = categories.find((c) => c.type ===t.category)

    if(category)category.amount += t.amount;
});

// removing all the categories with less than 0 amt
const filteredCategories = categories.filter((c) => c.amount > 0);
// Doughnut chart

const chartData = {
    datasets: [{
        data:filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type)
}
  return{total, chartData}
}
export default useTransactions;