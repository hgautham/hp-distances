import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';

function App() {

  const [currentSum,setCurrentSum]= useState(0);
  const [expressSum,setExpressSum]= useState(0);
  const [clear,setClear]=useState(false);


  const Broomify=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentNum/150;
    setCurrentSum(sum);
    let expressSum= currentNum/35;
    setExpressSum(expressSum);
    document.querySelector('#num').value="";
  }

  return (
    <div className="App">
      <header className="App-header">

        <p>
          How fast can you travel in the wizarding world? <br/>

          Enter a distance and click on Calculate to find out
        </p>

        <form>
            <input type="text" id="num" placeholder="enter a distance" /><br />
            <button onClick={Broomify}>Calculate</button><br /><br />
            <button>Hogwarts Express</button>
            <input type="text" id="result" value={expressSum}  readOnly /><br/>
            <button>Broom</button>
            <input type="text" id="result" value={currentSum}  readOnly />
      </form>

      <p>
        FAQ: <br/>

        Fastest ways to travel in the wizarding world <br/><br/>

        Apparition - Near instant <br />
        Broom - Firebolt speciality - 150 Miles/Hr <br/>
        Hogwarts Express - 35 Miles/Hr
      </p>

      </header>
    </div>
  );
}

export default App;
