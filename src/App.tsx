import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<div>Cart</div>} /> 
        <Route path="/favorites" element={<div>Favorites</div>} /> 
      </Routes>
    </>
  );
}

export default App;
