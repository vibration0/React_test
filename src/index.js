import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './components/header';
import Body from './components/Main';
import EventBtn from './components/Event';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const foodMenu = ['김밥','오뎅','떡볶이'];
export const userinfo = {
  name: '진동현',
  adress: '부천'
}
export const Event = () => {
  alert('이벤트 발생');
}
function App() {
  return(
    <div>
      <Top/>
      <Body/>
      <EventBtn/>
    </div>
  );
}
