import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);
  return (
    // BEM naming conventions 
    <div className="app"> 
      <div className="app__body">
        <Router>
            
            <Sidebar />

            <Switch>
            <Route path="/rooms/:roomId">              
              <Chat />  
            </Route> 

            <Route path="/">
              <Chat />
            </Route>      
                   
          </Switch> 
        </Router>     
        
      </div>
    </div>
  );
}

export default App;
