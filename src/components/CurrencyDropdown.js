import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch, currency, selectedCurrency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(selectedCurrency);

    const handleOnClick = (c) => {
      setNewCurrency(c);

      dispatch({
        type: 'CHG_CURRENCY',
        payload: c
      });
    }

    return (
      <div className="btn-group">
        <button 
          className="btn btn-outline-success dropdown-toggle" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
          {`Currency (${newCurrency.symbol} ${newCurrency.name})`}
        </button>
        <ul className="dropdown-menu">
          {currency.map((c) => (
            <li key={c.id}>
              <a
                className="dropdown-item"
                onClick={() => handleOnClick(c)}
              >
                {`${c.symbol} ${c.name}`}
              </a>
            </li>
          ))}
        </ul>
        </div>
    );
};
export default CurrencyDropdown;