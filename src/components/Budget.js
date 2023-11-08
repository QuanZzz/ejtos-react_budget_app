import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
      event.preventDefault();
        setNewBudget(event.target.value);
    }

    return (
      <div className='alert alert-secondary'>
      <span>Budget: £{newBudget}</span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
      </div>
    );
};
export default Budget;