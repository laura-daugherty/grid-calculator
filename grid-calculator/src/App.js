import React, {useState} from 'react';
import './App.css';
// import {numbers, operators} from "./data"

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
      setOperator(op)
      setNumOne(total)
      setNumTwo('')
      setTotal('')
    } else if (operator === "") {
      setOperator(op)
    } else if (op === "=") {
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
              <button onClick={() => {setOpState("/")}}>
                /
              </button>
              <button onClick={() => {setNumState("7")}}>
                7
              </button>
              <button onClick={() => {setNumState("8")}}>
                8
              </button>
              <button onClick={() => {setNumState("9")}}>
                9
              </button>
              <button onClick={() => {setOpState("*")}}>
                x
              </button>
              <button onClick={() => {setNumState("4")}}>
                4
              </button>
              <button onClick={() => {setNumState("5")}}>
                5
              </button>
              <button onClick={() => {setNumState("6")}}>
                6
              </button>
              <button onClick={() => {setOpState("-")}}>
                -
              </button>
              <button onClick={() => {setNumState("1")}}>
                1
              </button>
              <button onClick={() => {setNumState("2")}}>
                2
              </button>
              <button onClick={() => {setNumState("3")}}>
                3
              </button>
              <button onClick={() => {setOpState("+")}}>
                +
              </button>
              <button onClick={() => {setNumState("0")}}>
                0
              </button>
              <button onClick={() => {setOpState("=")}}>
                =
              </button>

              {/* {numbers.map((number) => { 
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
              })} */}
            </div>

          </div>
        </div>

      </div>
  );
}

export default App;
