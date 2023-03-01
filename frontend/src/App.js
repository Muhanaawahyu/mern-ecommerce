import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <header>
          <Navbar />
        </header>
        <main className="p-4 w-full flex-1 bg-teal-200">
          <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>
        <footer>
          <div className='text-center'>2023</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;