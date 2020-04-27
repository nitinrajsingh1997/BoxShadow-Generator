import React, { useState } from 'react';
import './App.css';

function App() {
  const [Horizontal, setHorizontal] = useState(10);
  const [Vertical, setVertical] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState("gray");
  const [Switch, setSwitch] = useState(false);
  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal Length</label>
        <input type="range" min="-200" max="200" value={Horizontal} onChange={(e)=>setHorizontal(e.target.value)}  />
        <label>Vertical Length</label>
        <input type="range" min="-200" max="200" value={Vertical} onChange={(e)=>setVertical(e.target.value)}  />
        <label>Blur</label>
        <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)}  /><br/><br/>
        <label className="blur">Blur</label>
        <input type="color" value={Color} onChange={(e)=>setColor(e.target.value)}  /><br/><br/>
        <div className="switch">
          <label>
            Outline
            <input type="checkbox" value={Switch} onChange={()=>setSwitch(!Switch)} />
            <span className="lever"></span>
            Inset
          </label>
        </div>
      </div>
      <div className="output">
        <div className="box" style={{boxShadow:`${Switch?"inset":""} ${Horizontal}px ${Vertical}px ${Blur}px ${Color}`}}>
          <p>box-shadow:{Horizontal}px {Vertical}px {Blur}px {Color}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
