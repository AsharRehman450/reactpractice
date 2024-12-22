import React from 'react';
import './App.css';
import { Data } from './Data';
import { Card } from './Components/Card'; 

function App() {
  return (
    <div className="app">
      <select>
        {Data.map((element, index) => (
          <option key={index}>{element.title}</option>
        ))}
      </select>

      <div className="card-container">
        {Data.map(item => (
          <Card
            key={item.id}
            id={item.id}
            imgSrc={item.imgSrc}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
