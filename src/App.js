import './App.css';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from './pages/Index';

function App() {



  return (
    <div className="App">
      
        <Router>
          <AnimatePresence>
            <Switch>
              <Route path='/' exact component={Index} />
            </Switch>
          </AnimatePresence>
        </Router>
      
    </div>
  );
}

export default App;
