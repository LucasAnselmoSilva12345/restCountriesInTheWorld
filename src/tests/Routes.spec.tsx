import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

describe('Router tests', () => {
  it('should render homepage', () => {
    render(<App />);
    const afghanistanCountry = screen.getByText(/Afghanistan/i);
    expect(afghanistanCountry).toBeInTheDocument();
  });
});
