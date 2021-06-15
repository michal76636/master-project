import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SignUp from './components/signUp';
import Massage from './components/massage';
import History from './components/history';
import Nav from './components/nav';

import { Provider } from 'react-redux';
import store from './components/redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              
              <SignUp />
            </Route>

            <Route path='/massage'>
              <Massage />
            </Route>
          
            <Route path='/history'>
               <History />
            </Route>

          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
