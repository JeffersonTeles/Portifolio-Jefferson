# Contributing to Jefferson Teles Portfolio

Thank you for your interest in contributing to this portfolio project!

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/Portifolio-Jefferson.git
cd Portifolio-Jefferson
```

3. Install dependencies:
```bash
npm install
```

4. Copy environment variables:
```bash
cp .env.example .env
```

5. Start development server:
```bash
npm run dev
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

### Project Structure

```
src/
├── components/       # Reusable components
├── sections/        # Page sections (Hero, About, etc.)
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── data/            # Static data
├── i18n.js          # Internationalization config
├── main.jsx         # Entry point
└── App.jsx          # Main app component
```

### Code Style

This project uses:
- **ESLint** for linting
- **Prettier** for code formatting
- **Husky** for git hooks

Code is automatically formatted and linted on commit.

## Making Changes

### Adding New Features

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes following the project structure

3. Test your changes:
```bash
npm run lint
npm run test
npm run build
```

4. Commit your changes:
```bash
git add .
git commit -m "feat: add your feature description"
```

5. Push and create a pull request

### Commit Message Convention

Follow conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

Tests should be placed in `src/components/__tests__/` or `src/sections/__tests__/`.

Example:
```jsx
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

## Accessibility

This project aims to be accessible to all users. When making changes:

- Use semantic HTML elements
- Add appropriate ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios (WCAG AA)

## Performance

- Use lazy loading for images
- Optimize bundle size with code splitting
- Minimize re-renders
- Use React.memo when appropriate

## Questions?

Feel free to open an issue for questions or suggestions.
