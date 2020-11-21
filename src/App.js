import { useEffect, useState } from 'react';
import { evaluate, fix } from 'mathjs';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  let buttons = [];
  useEffect(() => {
    buttons = document.querySelectorAll('.calculator > div:not(#display)');

    buttons.forEach(button => {
      // Numbers
      if (button.className === 'number') {
        button.addEventListener('click', event => {
          setDisplay(state => {
            let number = state + event.target.dataset.value;
            number = number.replace(/^0+/, '').replace(/(?<=\.\d*?)\./, '');
            return number ? number : '0';
          });
        });
      }

      // Clear
      if (button.id === 'clear') {
        button.addEventListener('click', () => {
          setDisplay('0');
        });
      }

      //operations
      if (button.className === 'operation') {
        button.addEventListener('click', event => {
          setDisplay(state => {
            const formula = state + event.target.dataset.value;
            return formula.replace(/[\+\-x\/]+?([\+x\/])/g, '$1');
          });
        });
      }
    });

    // Del
    const del = document.getElementById('del');
    del.addEventListener('click', () => {
      setDisplay(state => state.substring(0, state.length - 1));
    });
  }, []);

  const evaluateDisplay = () => {
    setDisplay(state => {
      try {
        return fix(evaluate(state.replace('x', '*')), 10).toString();
      } catch (e) {
        return '0';
      }
    });
  };

  return (
    <div className="App">
      <h1>JavaScript Calculator</h1>
      <div className="calculator">
        <div id="display">{display.length === 0 ? '0' : display}</div>
        <div id="clear">AC</div>
        <div className="number" id="one" data-value="1">
          1
        </div>
        <div className="number" id="two" data-value="2">
          2
        </div>
        <div className="number" id="three" data-value="3">
          3
        </div>
        <div className="number" id="four" data-value="4">
          4
        </div>
        <div className="number" id="five" data-value="5">
          5
        </div>
        <div className="number" id="six" data-value="6">
          6
        </div>
        <div className="number" id="seven" data-value="7">
          7
        </div>
        <div className="number" id="eight" data-value="8">
          8
        </div>
        <div className="number" id="nine" data-value="9">
          9
        </div>
        <div className="number" id="decimal" data-value=".">
          .
        </div>
        <div className="number" id="zero" data-value="0">
          0
        </div>
        <div id="equals" onClick={evaluateDisplay}>
          =
        </div>
        <div className="operation" id="add" data-value="+">
          +
        </div>
        <div className="operation" id="subtract" data-value="-">
          -
        </div>
        <div className="operation" id="multiply" data-value="x">
          x
        </div>
        <div className="operation" id="divide" data-value="/">
          /
        </div>
        <div id="del">DEL</div>
      </div>
    </div>
  );
}

export default App;
