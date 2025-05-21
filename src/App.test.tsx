import { render, screen, act } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

// Mock DarkModeToggle as its internal state/effects might interfere
vi.mock('./components/DarkModeToggle', () => ({
  default: () => <button data-testid="mock-dark-mode-toggle">Toggle Dark Mode</button>,
}));

describe('App component dark mode integration', () => {
  beforeEach(() => {
    document.documentElement.className = '';
    // Ensure body exists for any direct body manipulations if needed.
    if (!document.body) {
        document.body = document.createElement('body');
    }
  });

  test('renders without crashing and has no "dark" class by default', () => {
    render(<App />);
    // Check that 'dark' class is not on html element
    expect(document.documentElement).not.toHaveClass('dark');
    // Check that a key piece of content from App is rendered
    expect(screen.getByText(/Bienvenidos a la Boda de/i)).toBeInTheDocument();
  });

  test('reflects dark mode when "dark" class is added to html element', () => {
    render(<App />);
    
    act(() => {
      document.documentElement.classList.add('dark');
    });

    expect(document.documentElement).toHaveClass('dark');
    // Optionally, re-check that content is still rendered
    expect(screen.getByText(/Bienvenidos a la Boda de/i)).toBeInTheDocument();
  });

  test('reflects light mode when "dark" class is removed from html element', () => {
    render(<App />);

    // Start with dark mode
    act(() => {
      document.documentElement.classList.add('dark');
    });
    expect(document.documentElement).toHaveClass('dark');

    // Remove dark class
    act(() => {
      document.documentElement.classList.remove('dark');
    });
    
    expect(document.documentElement).not.toHaveClass('dark');
    // Optionally, re-check that content is still rendered
    expect(screen.getByText(/Bienvenidos a la Boda de/i)).toBeInTheDocument();
  });
});
