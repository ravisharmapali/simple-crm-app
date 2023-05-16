import logo from './logo.svg';
import './App.css';
import ListCustomerComponent from './components/ListCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <div className=''>  
          <HeaderComponent/>
            <div className="container">
                {/* <Switch> */}
                  <Routes>
                    <Route path='/' exact Component={ListCustomerComponent}></Route>
                    <Route path='/customers' Component={ListCustomerComponent}></Route>
                    <Route path='/add-customer' Component={CreateCustomerComponent}></Route>
                  </Routes>
                {/* </Switch> */}
            </div>
          <FooterComponent/>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
