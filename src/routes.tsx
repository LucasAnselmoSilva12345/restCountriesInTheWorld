import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { FilterCountries } from './pages/FilterCountries';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter-by-region" element={<FilterCountries />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
