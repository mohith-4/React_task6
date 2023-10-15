import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Header from './components/Header';
import HomeTabs from './components/HomeTabs';
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <div className="app">
      <header className="app-header">
        <img src={logo} className="logo" alt="logo"  height={30}/>
 
      <Header />
      </header> 
 
      <HomeTabs />
      </div>
    <div className='icons-List'>
 
     <Footer/>
    </div>
</div>
  );
}
export default App;