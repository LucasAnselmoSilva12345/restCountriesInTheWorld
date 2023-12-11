import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="bg-background shadow border-b border-primary">
      <div className="p-6 lg:px-16 flex items-center justify-between">
        <h1 className="font-semibold text-xl text-foreground">
          Where in the world?
        </h1>

        <ModeToggle />
      </div>
    </header>
  );
}
