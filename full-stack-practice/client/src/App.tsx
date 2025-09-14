import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { NotFound } from './NotFound';
import { About } from './About';
import { Catalog } from './Catalog';
import { ProductDetails } from './ProductDetails';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
