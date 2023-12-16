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

  it('should render link with correct href attributes to navigate to the homepage', () => {
    const titleAppLink = screen.getByRole('link', {
      name: /Where in the world?/i,
    });
    expect(titleAppLink).toBeInTheDocument();
    expect(titleAppLink.getAttribute('href')).toBe('/');
  });

  it('should render link with correct href attributes to navigate to the Filter By Region page', () => {
    const filterRegionLink = screen.getByRole('link', {
      name: 'Filter by Region',
    });
    expect(filterRegionLink).toBeInTheDocument();
    expect(filterRegionLink.getAttribute('href')).toBe('/filter-by-region');
  });
});
