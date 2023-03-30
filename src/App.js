import './App.css';
import Banner from './components/Banner';
import Customer from './components/Customer';
import Header from './components/Header';
import Transporting from './components/Transporting';
import WhatWeDo from './components/WhatWeDo';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <div className="App">
    <Header/>
    <Banner />
    <WhatWeDo />
    <WhyUs />
    <Transporting />
    <Customer />
    </div>
  );
}

export default App;
