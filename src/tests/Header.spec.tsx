import { MemoryRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { screen, render } from '@testing-library/react';

describe('Header Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('should render Header component with title of the app', () => {
    const titleApp = screen.getByText(/Where in the world?/i);
    expect(titleApp).toBeInTheDocument();
  });

  it('should render link with correct href attributes', () => {
    const filterRegionLink = screen.getByText('Filter by Region');
    expect(filterRegionLink).toBeInTheDocument();
    expect(filterRegionLink.getAttribute('href')).toBe('/filter-by-region');
  });
});
