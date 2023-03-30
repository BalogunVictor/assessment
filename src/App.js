import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import WhatWeDo from './components/WhatWeDo';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <div className="App">
    <Header/>
    <Banner />
    <WhatWeDo />
    <WhyUs />
    </div>
  );
}

export default App;
