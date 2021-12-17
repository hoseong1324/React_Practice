import React from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Chat from './Chat'
import Join from './Join'

// const [count, setCount] =useState(0);
// function countChk(){
//   alert("현재 카운트는 " + count + "입니다");
// }
// useEffect (() => {
//   document.title = `카운팅 ${count} `;
// })

const App = () =>  {
  return (
    <div className="App">
      <body>
        {/* <span> {count}</span>
        <hr></hr>
        <button onClick={()=> setCount(count+1)}>카운트증가</button>
        <button onClick={()=> setCount(count-1)}>카운트감소</button>
        <button onClick={countChk}>현재 카운트 팝업</button>
        <hr></hr> */}
        <div className="chat">
        <Router>
          <Route path='/' component={Join} />
          <Route path='/chat' component={Chat} />
        </Router>
        </div>
      </body>

    </div>
  );
}

export default App;
