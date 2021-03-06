import React, {useState} from 'react';
import './App.css';
import {numbers, operators} from "./data"

function App() {
  const [total, setTotal] = useState('')
  const [numOne, setNumOne] = useState('')
  const [numTwo, setNumTwo] = useState('')
  const [operator, setOperator] = useState('')

  const clearState = () => {
    setNumOne('')
    setNumTwo('')
    setOperator('')
    setTotal('')
  }

  const setOpState = (op) => {
    if (operator !== "" && total !== "") {
      setOperator(op.value)
      setNumOne(total)
      setNumTwo('')
      setTotal('')
    } else if (operator === "") {
      setOperator(op.value)
    } else if (op.value === "=") {
      console.log("====")
      showTotal()
    } 
  }

  const showTotal = () => {
    setTotal(
      eval(`${numOne} ${operator} ${numTwo}`)
    ) 
    console.log("total", total)
  }

  const setNumState = (num) => {
    if (operator === "") {
      if (numOne) {
        setNumOne(`${numOne + num}`)
      } else {
        setNumOne(num)
      }
    } else {
      if (numTwo) {
        setNumTwo(`${numTwo + num}`)
      } else {
        setNumTwo(`${num}`)
      }
    }
  }

  return (
      <div className="App">
        <div className="wrapper">

          <header className="App-header">
            CSS Grid Calculator
          </header>
          <div className="mainbox">

            <div className="display">
              {numOne}
              {operator}
              {numTwo}
              {total ? <div> = {total} </div> : <div></div>}
            </div>
 
            <div className="buttons">
              <button onClick={() => {clearState()}}>
                C
              </button>
              {numbers.map((number) => { 
                return (
                <button key={number} onClick={() => {setNumState(number)}}>
                  {number}
                </button>
                )
              })}
              {operators.map((operator) => { 
                return (
                <button key={operator.char} onClick={() => {setOpState(operator)}}>
                  {operator.char}
                </button>
                )
              })}
            </div>

          </div>
        </div>

      </div>
  );
}

export default App;
