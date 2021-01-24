import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    // BEM naming conventions 
    <div className="app">  

      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Chat */}
      </div>   

    </div>
  );
}

export default App;
