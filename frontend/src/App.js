import Navbar from './components/Navbar';
import Home from "./pages/Home"
import AddContact from './pages/AddContact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddContact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
