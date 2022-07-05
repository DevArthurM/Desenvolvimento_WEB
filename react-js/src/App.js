import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import ChangeMachine from './components/ChangeMachine';

function App() {
  let isChanged
  const [text, setText] = useState("state")
  const [type, setType] = useState('button')

  return (
    <div className="App">
      <div className='aplication'>
      <ChangeMachine text={text} setText={setText} type={type} />
      <button onClick={() => {setText('MUDANDO COMPONENTE DENTRO DO APP')}} className='button_class'>APP PRINCIPAL</button>
      </div>
    </div >
  );
}

export default App;
