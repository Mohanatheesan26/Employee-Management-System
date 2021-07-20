import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={EmployeeList}></Route>
                <Route path="/employees" component={EmployeeList}></Route>
                <Route path="/add-employee" component={AddEmployee}></Route>
              </Switch>
            </div>
          <Footer/>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
