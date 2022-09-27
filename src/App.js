
import './App.css';
import Calculator from './Calculator';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
