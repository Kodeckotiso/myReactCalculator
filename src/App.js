import './App.css';
import {useRef,useState} from 'react';

export default function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus=(e)=>{
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const minus=(e)=>{
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const multiplication=(e)=>{
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const divide=(e)=>{
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  const resetInput=(e)=>{
    e.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult=(e)=>{
    e.preventDefault();
    setResult((prevval) => prevval * 0);
  };
  return (
    <div className='App'>
      <div>
      <h1>my calculator</h1>
      </div>
      <form>
        <h1 ref={resultRef}>{result}</h1>
        <input patterns='[0-9]'type='number' placeholder ="put yor number here" ref={inputRef}/>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus </button>
        <button onClick={divide}>divide </button>
        <button onClick={multiplication}>multiplication </button>
        <button onClick={resetInput}>reset </button>
        <button onClick={resetResult}>resetResult</button>
      </form>
    </div>
    );
  }