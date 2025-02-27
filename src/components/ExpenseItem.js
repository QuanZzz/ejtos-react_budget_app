import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, selectedCurrency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
      const expense = {
          name: name,
          cost: 10,
      };

      dispatch({
          type: 'ADD_EXPENSE',
          payload: expense
      });
    }

    const decreaseAllocation = (name) => {
      const expense = {
          name: name,
          cost: -10,
      };

      dispatch({
          type: 'SUBSTRACT_EXPENSE',
          payload: expense
      });
    }

    return (
      <tr>
        <td>
          {props.name}
        </td>
        <td>
          {selectedCurrency.symbol}{props.cost}
        </td>
        <td>
          <button onClick={event=> increaseAllocation(props.name)}>+</button>
        </td>
        <td>
          <button onClick={event=> decreaseAllocation(props.name)}>-</button>
        </td>
        <td>
          <TiDelete size='1.5em' onClick={handleDeleteExpense} />
        </td>
      </tr>
    );
};

export default ExpenseItem;