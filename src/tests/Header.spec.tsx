import { Header } from '../components/Header';
import { screen, render } from '@testing-library/react';

describe('Countries Card Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should render Header component with title of the app', async () => {
    const titleApp = screen.getByText(/Where in the world?/i);
    expect(titleApp).toBeInTheDocument();
  });
});
