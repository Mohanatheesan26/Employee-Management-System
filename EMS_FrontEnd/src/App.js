import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div>
      <Router>
          <Header/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={EmployeeList}></Route>
                <Route path="/employees" component={EmployeeList}></Route>
                <Route path="/add-employee" component={AddEmployee}></Route>
                <Route path="/update-employee/:id" component={UpdateEmployee}></Route>
              </Switch>
            </div>
          <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
