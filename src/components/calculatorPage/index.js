import React, { useState } from 'react'; 

import { numberArr, operatorArr } from 'constants/calculator';

const CalculatorPage = _ => {
  const [calValue, setCalValue] = useState('');
  const [refValue, setRefValue] = useState('');
  const [operator, setOperator] = useState(false);

  const updateCalValue = val => {
    setCalValue(`${calValue}${val}`);

    if (operator) { setCalValue(`${val}`); setOperator(false); }
  };

  const updateRefValue = operator => {
    setRefValue(`${calValue}${operator}`);
    setOperator(true);
  };

  const getFinalVal = _ => {
    setCalValue(eval(`${refValue}${calValue}`));
  };

  const clearAllInput = _ => {
    setOperator(false);
    setRefValue('');
    setCalValue('');
  };
  return (
    <div className={'page-wrapper'}>
      <div className={'input-wrapper'}>
        <input value={calValue} />
      </div>
      <div className={'actions-container'}>
        <div className={'actions-wrapper'}>
          <div className={'number-wrapper'}>
          {numberArr.map(num => <button key={num} onClick={_ => updateCalValue(num)}>{num}</button>)}
          </div>
          <div className={'bottom-operators'}>
            <button onClick={clearAllInput}>AC</button>
            <button onClick={getFinalVal}>=</button>
          </div>
        </div>
        <div className={'operator-wrapper'}>
          {operatorArr.map(operator => <button key={operator} onClick={_ => updateRefValue(operator)}>{operator}</button>)}
        </div>
      </div>
    </div>
  );
}

export default CalculatorPage;