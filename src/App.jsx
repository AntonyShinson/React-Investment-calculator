import {useState} from 'react';
import Header from "../Component.jsx/Header";
import UserInput from "../Component.jsx/UserInput";
import Result from "../Component.jsx/Result";

function App() {
  const[userInput,setUserInput]=useState({
    initialInvestment:15000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
  });
function handleChange(inputIdentifier,newValue)
    {
      setUserInput(prevUserInput=>{
        return{...prevUserInput,[inputIdentifier]:+newValue};
      })
    }
const inputIsValid = userInput.duration>0;
  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {inputIsValid && <Result input={userInput}/>}
    </>
  )
}

export default App
