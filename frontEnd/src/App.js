import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';

function App() {
  return (
    // BEM naming conventions 
    <div className="app">  

      <div className="app__body">
        <Router>
          <Switch>         
            <Sidebar />
            <Chat />          
          </Switch> 
        </Router>     
        
      </div>   

    </div>
  );
}

export default App;
