import React,{useState,useEffect} from 'react';
import '../css/App.css';

const App = () =>  {
  const [count, setCount] =useState(0);
  function countChk(){
    alert("현재 카운트는 " + count + "입니다");
  }
  useEffect (() => {
    document.title = `카운팅 ${count} `;
  })
  return (
    <div className="App">
      <header className="header">
        헤더영역
      </header>
      <body>
        <span>카운팅스타 = {count}</span>
        <hr></hr>
        <button onClick={()=> setCount(count+1)}>카운트증가</button>
        <button onClick={()=> setCount(count-1)}>카운트감소</button>
        <button onClick={countChk}>현재 카운트 팝업</button>
      </body>
      <footer>
        밤하늘의 퍼얼
      </footer>
    </div>
  );
}

export default App;
