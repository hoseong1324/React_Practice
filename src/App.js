import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';

const App = () =>  {
  const [count, setCount] =useState(0);
  function countChk(){
    alert("현재 카운트는 " + count + "입니다");
  }
  useEffect (() => {
    document.title = `카운트 ${count} 타이틀`;
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>현재 카운트 = {count}</h3>
        <button onClick={()=> setCount(count+1)}>카운트증가</button>
        <button onClick={()=> setCount(count-1)}>카운트감소</button>
        <button onClick={countChk}>현재 카운트 팝업</button>
      </header>
    </div>
  );
}

export default App;
