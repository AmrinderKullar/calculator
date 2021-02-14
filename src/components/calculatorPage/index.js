import React, { useState } from 'react'; 

import { numberArr, operatorArr } from 'constants/calculator';
import Button from 'components/Button';

const CalculatorPage = _ => {
  const [calValue, setCalValue] = useState('');
  const [refValue, setRefValue] = useState('');
  const [operator, setOperator] = useState(false);

  const updateCalValue = val => {
    setCalValue(`${calValue}${val}`);
    if (operator) { setCalValue(`${val}`); setOperator(false); }
  };

  const updateRefValue = operator => {
    setRefValue(`${refValue} ${calValue} ${operator}`);
    setOperator(true);
  };

  const getFinalVal = _ => {
    let evalString = refValue;
    if (!refValue) {
      evalString = calValue;
    }
    // case to remove if any operator is added in the end
    else if (operatorArr.includes(refValue[refValue.length])) {
      evalString.splice(-1, 1);
    } else {
      evalString = `${evalString}${calValue}`;
    }
    setCalValue(eval(evalString));
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
            {numberArr.map(num => <Button key={num.val} onClick={_ => updateCalValue(num.val)} className={num.classname} name={num.val} />)}
          </div>
          <div className={'bottom-operators'}>
            <Button onClick={clearAllInput} className={'ac-button'} name={'AC'}/>
            <Button onClick={getFinalVal} className={'assign-button'} name={'='} />
          </div>
        </div>
        <div className={'operator-wrapper'}>
          {operatorArr.map(operator => <Button key={operator} onClick={_ => updateRefValue(operator)} name={operator} />)}
        </div>
      </div>
    </div>
  );
}

export default CalculatorPage;