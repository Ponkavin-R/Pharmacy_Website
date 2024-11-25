import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Banner/>
      <Features/>
      <Products/>
      <Footer/>

    </div>
  );
}

export default App;
