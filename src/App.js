import logo from './logo.svg';
import './App.css';
import Navbar from './composantes/navbar';
import Router from './router';
import Footer from './composantes/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
