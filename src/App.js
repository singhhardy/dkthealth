import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './paging/Dashboard';
import MdList from './paging/MdList';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
    <Header/>
      <Router>
        <div className="app">
          <div className='content'>
            <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/MD-List' exact element={<MdList />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
