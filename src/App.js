import './App.css'
import Dashboard from './pages/Dashboard'
import Supplier from './pages/Supplier'
import Distributors from './pages/Distributors'
import Diocese from './pages/Diocese'
import { Routes, Route } from 'react-router-dom'
import LayoutNav from './components/LayoutNav'
import Product from './pages/Product'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutNav />}>
          <Route index element={<Dashboard />} />
          <Route path='/distributors' element={<Distributors />} />
          <Route path='/diocese' element={<Diocese />} />
          <Route path='/suppliers' element={<Supplier />} />
          <Route path='/products' element={<Product />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
