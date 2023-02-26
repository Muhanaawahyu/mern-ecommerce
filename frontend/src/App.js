import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <header className="bg-slate-900 p-5">
          <Link to="/" className="text-slate-100 font-bold">Tukupedia</Link>
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