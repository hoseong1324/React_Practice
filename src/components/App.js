import React,{useState,useEffect} from 'react';
import '../css/App.css';

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
      <header className="header">
        헤더영역
      </header>
      <body>
        <h3>현재 카운트 = {count}</h3>
        <button onClick={()=> setCount(count+1)}>카운트증가</button>
        <button onClick={()=> setCount(count-1)}>카운트감소</button>
        <button onClick={countChk}>현재 카운트 팝업</button>
      </body>
      <footer>
        푸터
      </footer>
    </div>
  );
}

export default App;
