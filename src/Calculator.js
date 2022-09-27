import React, { useState } from 'react'

function Calculator() {
    const [value, setvalue] = useState("")


    const calculateFunc = () => {
        let questionString = value
        if (questionString.includes('+')) {
            const numberArray = questionString.split('+');
            setvalue((ansVal) => ansVal = parseInt(numberArray[0]) + parseInt(numberArray[1]))
        }
        else if (questionString.includes('-')) {
            const numberArray = questionString.split('-');
            setvalue((ansVal) => ansVal = parseInt(numberArray[0]) - parseInt(numberArray[1]))
        }
        else if (questionString.includes('*')) {
            const numberArray = questionString.split('*');
            setvalue((ansVal) => ansVal = parseInt(numberArray[0]) * parseInt(numberArray[1]))
        }
        else if (questionString.includes('/')) {
            const numberArray = questionString.split('/');
            setvalue((ansVal) => ansVal = parseInt(numberArray[0]) / parseInt(numberArray[1]))
        }
        else if (questionString.includes('[')) {
            var answer = 0
            let numberArray = questionString.replace('[', '');
            numberArray = numberArray.replace(']', '');
            numberArray = numberArray.split(',');
            for (var i = 0; i < numberArray.length; i++) {
                answer += parseInt(numberArray[i]);
            }
            setvalue((ansVal) => setvalue(answer))
        }


    }
    const mapButton = ([
        [["1","2","3","+"]],
        [["4","5","6","-"]],
        [["7","8","9","*"]],
        [["0","/","=","CLRE"]]
      ]);
      
      const buttonItems = mapButton.map(
        function mapper(s) {
           
            if (Array.isArray(s)) {
              return s.map(mapper);
            }
            else {
                if (s === "=")
                return <button value={s} onClick={() => calculateFunc()}>{s}</button>;
                if (s === "CLRE")
                return <button value={s} onClick={() => setvalue(value.slice(0, -1))}>{s}</button>;
                if (s !== "=" || s !== "CLRE")
                return <button className ='calBtn' value={s} onClick={(clkVal) => setvalue(value + clkVal.target.value)}>{s}</button>;
                
            }
        
        }
        )
      
    return (
        <div>
            <div>
                <h1 >Linear Calculator </h1>
            </div>
            <div>
                <input className='callhead' type="text" value={value} />
            </div>
            <div>
                {
                  buttonItems  
                }
            </div>
            {/* <div>
                <button value="1" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>1</button>
                <button value="2" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>2</button>
                <button value="3" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>3</button>
                <button value="+" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>+</button>
            </div>
            <div>
                <button value="4" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>4</button>
                <button value="5" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>5</button>
                <button value="6" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>6</button>
                <button value="-" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>-</button>
            </div>
            <div>
                <button value="7" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>7</button>
                <button value="8" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>8</button>
                <button value="9" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>9</button>
                <button value="*" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>*</button>
            </div>
            <div>
                <button value="0" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>0</button>
                <button value="/" onClick={(clkVal) => setvalue(value + clkVal.target.value)}>/</button>
                <button value="" onClick={() => calculateFunc()}>=</button>
                <button value="" onClick={() => setvalue(value.slice(0, -1))}>CLRE</button>
            </div> */}
        </div>
    )
}

export default Calculator