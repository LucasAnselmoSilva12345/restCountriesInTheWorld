import { ModeToggle } from './mode-toggle';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-background shadow border-b border-primary">
      <div className="p-6 lg:px-16 flex items-center justify-between">
        <nav>
          <ul>
            <li>
              <Link
                to="/filter-by-region"
                className="text-primary underline text-sm transition-all hover:opacity-75"
              >
                Filter by Region
              </Link>
            </li>
          </ul>
        </nav>

        <h1 className="font-semibold text-2xl lg:text-4xl text-foreground">
          <Link to="/">Where in the world?</Link>
        </h1>

        <ModeToggle />
      </div>
    </header>
  );
}
