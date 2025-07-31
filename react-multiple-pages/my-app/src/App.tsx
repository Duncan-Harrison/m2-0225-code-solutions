import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="details/:itemId" element={<Details />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
