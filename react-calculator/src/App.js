import React, { useEfect, useState } from "react";
import ActionBtn from './Components/Action-Btn/ActionBtn';
import NumberBtn from './Components/Number-Btn/NumberBtn';
import './App.css';

function App() {
  function whatsThat(e) {
    console.log(e.target.textContent);
  }

  const [sum, setSum] = useState(0);

  const [oldSum, setOldSum] = useState(sum);//form mathAct
  // const [oldSum, setOldSum] = useState(sum);//form mathAct


  function newSum(e) {
    if (e.target.textContent === '0') {
      if (sum === 0) {
        setSum(0);
        setOldSum(sum);
        console.log(oldSum);
        console.log(sum);
        return
      }
      setSum(prev => prev + e.target.textContent);
      setOldSum(sum);
    }
    if (e.target.textContent !== '0') {
      if (sum === 0) {
        setSum(e.target.textContent);
        setOldSum(sum);
        console.log(oldSum);
        console.log(sum);
        return;
        // console.log(e.target.textContent);
      }
      setSum(prev => prev + e.target.textContent);
      setOldSum(sum);
      console.log(oldSum);
      console.log(sum);
    }
  }

  function clearSum() {
    setSum(0);
  }

  function mathOpe(e) {
    if (e.target.textContent === '+') {
      setOldSum(sum);
      console.log(oldSum);
      console.log(sum);
    }
  }

  return (
    <div className="App">
      <p>{sum}</p>
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
        <ActionBtn mathAct='=' action={whatsThat} />
        <ActionBtn mathAct='+' action={mathOpe} />
        <ActionBtn mathAct='-' action={whatsThat} />
        <ActionBtn mathAct='*' action={whatsThat} />
        <ActionBtn mathAct='/' action={whatsThat} />
      </div>
    </div>
  );
}

export default App;
