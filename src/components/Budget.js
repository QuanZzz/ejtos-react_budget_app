import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const MAX_BUDGET = 20000;

const Budget = () => {
    const { budget, expenses, selectedCurrency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
      return total += item.cost;
    }, 0);
    
    const handleBudgetChange = (event) => {
      event.preventDefault();
      
      if(parseInt(event.target.value) > MAX_BUDGET) {
        alert(`The value cannot exceed ${MAX_BUDGET}`);
        return;
      }

      if(parseInt(event.target.value) < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending");
        return;
      }

      setNewBudget(event.target.value);

      dispatch({
        type: 'SET_BUDGET',
        payload: event.target.value
      });
    }

    return (
      <div className='alert alert-secondary'>
        <span>Budget: {selectedCurrency.symbol}</span>
        <input 
          type="number" 
          step="10" 
          value={newBudget} 
          onChange={handleBudgetChange}
        />
      </div>
    );
};
export default Budget;