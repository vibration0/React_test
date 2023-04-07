import { useState } from 'react';
import {MdDarkMode} from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
import './App.css';

function App() {
  // isDark = true, not isDark = false
  const [isDark, setIsDark] = useState(false);

  const setDarkMode = () => {
    setIsDark(!isDark); // !(not연산자)->값을 반전시킨다
    console.log('dark mode',isDark);
  }

  return (
    //className을 동적으로 변경
    // isDark true = class="dark" 아니면 class=""
    <div className={isDark ? "App dark" : "App"}>
      <header>
        <h1>Dark Mode App</h1>
        <button onClick={setDarkMode}>{isDark ? <MdDarkMode/>: <MdOutlineDarkMode/>}</button>
        </header>
        <main>
          <h2>Dark Mode Toggle</h2>
            <p>미래를 준비하는 가장 좋은 방법은 현재 최선을 다하는 것입니다. 미래에 대한 걱정과
               불안보다는 현재에 집중하며 최선을 다하면 더 나은 미래를 만들어갈 수 있습니다. 
               하지만 미래를 완전히 예측할 수는 없으므로 최선을 다한 결과가 좋지 않을 수도 있습니다. 
               그렇다면 미래에 대한 걱정은 어떻게 해야할까요? 현재에 집중하되, 가능한 최악의 상황에 대비하며 대비책을 마련해두는 것이 좋습니다.
                이를 통해 더욱 안정적인 미래를 준비할 수 있습니다.</p>
        </main>
    
    </div>
  );
}

export default App;
