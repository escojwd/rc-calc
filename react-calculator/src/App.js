import React, { useEfect, useState } from "react";
import ActionBtn from './Components/Action-Btn/ActionBtn';
import NumberBtn from './Components/Number-Btn/NumberBtn';
import './App.css';

function App() {
  const [calc, setCalc] = useState(0);
  const [newNumber, setNewNumber] = useState(0);//for mathAct
  const [oldNumber, setOldNumber] = useState(0);//for mathAct
  const [act, setAct] = useState('');
  const [newCalc, setNewCalc] = useState(true);
  // const [] = useState();


  function newSum(e) {
    if (!newCalc) {
      setNewCalc(true);
      clearSum();
      setCalc(e.target.textContent);
      // renderCalc(e)
      return
    }
    renderCalc(e)
  }

  function renderCalc(e) {
    if (e.target.textContent === '0') {
      if (calc === 0) {
        setCalc(0);
        setNewNumber(0);
        return
      }
      setCalc(prev => prev + e.target.textContent);
      setNewNumber(calc);
    }
    if (e.target.textContent !== '0') {
      if (calc === 0) {
        setCalc(e.target.textContent);
        setNewNumber(calc)
        return;
      }
      setCalc(prev => prev + e.target.textContent);
      setNewNumber(prev => prev + e.target.textContent);
    }
  }

  function clearSum() {
    setCalc(0);
    setNewNumber(0);
    setOldNumber(0);
    setNewCalc(true);
  }

  function mathOpe(e) {
    // if (act === e.target.textContent) {
    //   return;
    // } else {
    // setCalc(calc.substr(0, calc.length - 1) + e.target.textContent);
    setOldNumber(calc);
    setCalc(prev => prev + e.target.textContent);
    setNewNumber(0);
    setAct(e.target.textContent);
    setNewCalc(true)
    // }
  }

  function equalSum() {
    setNewCalc(false);

    if (act === '+') {
      setCalc(parseInt(oldNumber) + parseInt(newNumber));
      return
    }
    if (act === '-') {
      setCalc(parseInt(oldNumber) - parseInt(newNumber));
      return

    }
    if (act === '*') {
      setCalc(parseInt(oldNumber) * parseInt(newNumber));
      return
    }
    if (act === '/') {
      setCalc(parseInt(oldNumber) / parseInt(newNumber));
      return
    }
  }

  // console.log(Number('23'));

  return (
    <div className="App">
      <p>{calc}</p>
      <div className='numbs-wrap'>
        <button onClick={clearSum} className='clear-btn'>Clear</button>
        <NumberBtn numb='0' action={newSum} />
        <NumberBtn numb='1' action={newSum} />
        <NumberBtn numb='2' action={newSum} />
        <NumberBtn numb='3' action={newSum} />
        <NumberBtn numb='4' action={newSum} />
        <NumberBtn numb='5' action={newSum} />
        <NumberBtn numb='6' action={newSum} />
        <NumberBtn numb='7' action={newSum} />
        <NumberBtn numb='8' action={newSum} />
        <NumberBtn numb='9' action={newSum} />
      </div>
      <div className='actions-wrap'>
        <ActionBtn mathAct='=' action={equalSum} />
        <ActionBtn mathAct='+' action={mathOpe} />
        <ActionBtn mathAct='-' action={mathOpe} />
        <ActionBtn mathAct='*' action={mathOpe} />
        <ActionBtn mathAct='/' action={mathOpe} />
      </div>
    </div>
  );
}

export default App;
