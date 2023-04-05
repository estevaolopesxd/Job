
// pages
import Home from './Pages/Home/Home';
import Cadastro from './Pages/Cadastro/Cadastro'
import Lista from './Pages/Lista/Lista'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
