import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import DarkModeToggle from './DarkModeToggle'; // Adjust import path if needed
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe('DarkModeToggle', () => {
  // Helper to set localStorage mock
  const mockLocalStorage = (() => {
    let store: { [key: string]: string } = {};
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
      removeItem: (key: string) => {
        delete store[key];
      }
    };
  })();
  

  // Helper to mock matchMedia
  const mockMatchMedia = (matches: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: matches,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  };

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', { value: mockLocalStorage, configurable: true });
    mockLocalStorage.clear();
    // Default to light mode preference
    mockMatchMedia(false);
    // Clear class list
    document.documentElement.className = ''; // Clear all classes
    cleanup(); // Unmount components and clean up DOM
  });

  test('initializes with light mode by default', () => {
    render(<DarkModeToggle />);
    expect(document.documentElement).not.toHaveClass('dark');
    // Check for Moon icon (light mode) by verifying the aria-label of the button
    expect(screen.getByLabelText("Switch to Dark Mode")).toBeInTheDocument();
    // Check that Sun icon is not present
    expect(screen.queryByLabelText("Switch to Light Mode")).not.toBeInTheDocument();
  });
  
  test('initializes with dark mode if localStorage is set to "true"', () => {
    mockLocalStorage.setItem('darkMode', 'true');
    render(<DarkModeToggle />);
    expect(document.documentElement).toHaveClass('dark');
    // Check for Sun icon (dark mode)
    expect(screen.getByLabelText("Switch to Light Mode")).toBeInTheDocument();
  });

  test('initializes with dark mode if prefers-color-scheme is dark (and no localStorage)', () => {
    mockMatchMedia(true);
    render(<DarkModeToggle />);
    expect(document.documentElement).toHaveClass('dark');
    expect(screen.getByLabelText("Switch to Light Mode")).toBeInTheDocument();
  });

  test('toggles dark mode on click, updates localStorage, and changes icon', () => {
    render(<DarkModeToggle />);
    const toggleButton = screen.getByRole('button');

    // Initial state: light mode (Moon icon, "Switch to Dark Mode" label)
    expect(document.documentElement).not.toHaveClass('dark');
    expect(screen.getByLabelText("Switch to Dark Mode")).toBeInTheDocument(); // Moon is shown

    // Activate dark mode
    fireEvent.click(toggleButton);
    expect(document.documentElement).toHaveClass('dark');
    expect(mockLocalStorage.getItem('darkMode')).toBe('true');
    expect(screen.getByLabelText("Switch to Light Mode")).toBeInTheDocument(); // Sun is shown

    // Activate light mode
    fireEvent.click(toggleButton);
    expect(document.documentElement).not.toHaveClass('dark');
    expect(mockLocalStorage.getItem('darkMode')).toBe('false');
    expect(screen.getByLabelText("Switch to Dark Mode")).toBeInTheDocument(); // Moon is shown
  });

  test('localStorage overrides prefers-color-scheme (localStorage says light, prefers-color-scheme says dark)', () => {
    mockLocalStorage.setItem('darkMode', 'false');
    mockMatchMedia(true); // System prefers dark
    render(<DarkModeToggle />);
    expect(document.documentElement).not.toHaveClass('dark'); // Should be light due to localStorage
    expect(screen.getByLabelText("Switch to Dark Mode")).toBeInTheDocument();
  });

  test('localStorage overrides prefers-color-scheme (localStorage says dark, prefers-color-scheme says light)', () => {
    mockLocalStorage.setItem('darkMode', 'true');
    mockMatchMedia(false); // System prefers light
    render(<DarkModeToggle />);
    expect(document.documentElement).toHaveClass('dark'); // Should be dark due to localStorage
    expect(screen.getByLabelText("Switch to Light Mode")).toBeInTheDocument();
  });
});
