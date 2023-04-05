<<<<<<< HEAD
// pages
import Home from './Pages/Home/Home';
import Cadastro from './Pages/Cadastro/Cadastro'
=======

// pages
import Home from './Pages/Home/Home';
import Cadastro from './Pages/Cadastro/Cadastro'
import Lista from './Pages/Lista/Lista'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
>>>>>>> 0be191a5b9fa4597f7805c5441ce78015fb592a6

function App() {
  return (
    <div className="App">

<<<<<<< HEAD

      <Home />

      <Cadastro />

=======
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 0be191a5b9fa4597f7805c5441ce78015fb592a6
    </div>

  );
}

export default App;
