# Elios AI Interview Service - Frontend

An AI-powered mock interview platform that helps candidates practice and improve their interview skills through realistic conversational simulations. Built with React 19 and featuring both text and voice interaction modes.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technology Stack](#technology-stack)
- [Documentation](#documentation)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

### Dual-Mode Interview Interface
- **Text Chat Mode**: Real-time text-based conversations with AI interviewer
- **Voice Chat Mode**: Interactive voice interface with visual feedback and sound wave animations
- **Seamless Switching**: Toggle between text and voice modes during sessions

### Interactive Components
- **Message Display**: Clean, chat-style message bubbles with timestamps
- **Profile Cards**: Visual representation of user and AI interviewer
- **Session Controls**: Easy-to-use controls for mode switching and session management
- **Performance Feedback**: Comprehensive feedback modal with category scores, strengths, and improvement areas

### User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Material Icons**: Modern, clean iconography
- **Smooth Animations**: Sound wave visualization during voice recording
- **Auto-scrolling**: Messages automatically scroll to latest content

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd view
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

The app will automatically reload when you make changes to the source code.

## Project Structure

```
view/
├── docs/                       # Documentation
│   ├── project-overview-pdr.md    # Project overview and requirements
│   ├── codebase-summary.md        # Technology stack and structure
│   ├── code-standards.md          # Coding standards and conventions
│   └── system-architecture.md     # Architecture and design patterns
│
├── public/                     # Static assets
│   ├── index.html                 # HTML template
│   ├── favicon.ico                # App icon
│   ├── manifest.json              # PWA manifest
│   └── robots.txt                 # SEO configuration
│
├── src/                        # Source code
│   ├── components/                # React components
│   │   ├── TextChat.js               # Text chat interface
│   │   ├── VoiceChat.js              # Voice chat interface
│   │   ├── Message.js                # Message display component
│   │   ├── TabControls.js            # Mode switcher controls
│   │   └── FeedbackModal.js          # Feedback display modal
│   │
│   ├── data/                      # Mock data
│   │   └── mockData.js               # Sample messages and feedback
│   │
│   ├── styles/                    # Stylesheets
│   │   └── App.css                   # Main application styles
│   │
│   ├── App.js                     # Root component
│   ├── index.js                   # Application entry point
│   ├── setupTests.js              # Test configuration
│   └── reportWebVitals.js         # Performance monitoring
│
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies and scripts
├── openapi.json               # Backend API specification
└── README.md                  # This file
```

## Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- Hot reloading enabled
- Lint errors shown in console

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.
- Runs all test files
- Re-runs tests on file changes

### Production Build
```bash
npm run build
```
Builds the app for production to the `build` folder.
- Optimized and minified
- Includes hashed filenames
- Ready for deployment

### Eject (Not Recommended)
```bash
npm run eject
```
**Warning: This is a one-way operation!**

Ejects from Create React App, giving you full control over configuration files.

## Technology Stack

### Core
- **React 19.1.1**: UI framework with latest features
- **React DOM 19.1.1**: DOM rendering
- **React Scripts 5.0.1**: Build tooling from Create React App

### Development Tools
- **@testing-library/react 16.3.0**: Component testing
- **@testing-library/jest-dom 6.9.1**: Custom Jest matchers
- **web-vitals 2.1.4**: Performance metrics

### UI/UX
- **Material Icons**: Google's icon library (CDN)
- **Custom CSS**: Extensive custom styling with animations
- **CSS Variables**: Dynamic styling for sound waves

### Build System
- **Webpack**: Module bundler (via CRA)
- **Babel**: JavaScript transpiler (via CRA)
- **ESLint**: Code linting (via CRA)

## Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[Project Overview & PDR](docs/project-overview-pdr.md)**: Project goals, features, target users, and success criteria
- **[Codebase Summary](docs/codebase-summary.md)**: Technology stack, project structure, and component details
- **[Code Standards](docs/code-standards.md)**: Coding conventions, best practices, and style guidelines
- **[System Architecture](docs/system-architecture.md)**: Architecture overview, data flow, and design patterns

## Development

### Current Development Status

**Branch**: `feat/chat-ui`

**Recent Commits**:
- Chat UI implementation
- Microphone button enable/disable functionality
- API specification documentation

### Component Overview

#### App.js
Main application component that:
- Manages global state (active tab, feedback modal)
- Orchestrates child components
- Handles session control

#### TextChat.js
Text-based chat interface featuring:
- Message list with auto-scroll
- Text input with Enter key submission
- Simulated AI responses

#### VoiceChat.js
Voice interaction interface with:
- Microphone button with recording state
- Sound wave visualization
- Profile cards for user and AI
- Decorative office environment

#### FeedbackModal.js
Session feedback display showing:
- Overall performance score
- Category-specific scores
- Strengths and improvement areas
- Recommended next steps

### State Management

The application uses React Hooks for state management:

```javascript
// Global state (App.js)
const [activeTab, setActiveTab] = useState('text');
const [showFeedback, setShowFeedback] = useState(false);
const [sessionEnded, setSessionEnded] = useState(false);

// Component state (TextChat.js)
const [messages, setMessages] = useState(mockMessages);
const [inputText, setInputText] = useState('');

// Component state (VoiceChat.js)
const [isSpeaking, setIsSpeaking] = useState(false);
const [audioLevel, setAudioLevel] = useState(0);
```

### Backend Integration (Planned)

The `openapi.json` file defines the backend API:

**Endpoints**:
- `POST /api/interviews/plan`: Plan interview with adaptive questions
- `GET /api/interviews/{id}/plan`: Get planning status
- `PUT /api/interviews/{id}/start`: Start interview session

**Note**: Backend integration is not yet implemented. The app currently uses mock data.

### Development Guidelines

1. **Follow Code Standards**: See [docs/code-standards.md](docs/code-standards.md)
2. **Component Structure**: Use functional components with hooks
3. **Naming Conventions**:
   - Components: PascalCase
   - Functions/Variables: camelCase
   - CSS Classes: kebab-case
4. **State Updates**: Use functional updates when state depends on previous state
5. **Effects**: Always include dependency arrays and cleanup functions

## Testing

### Running Tests

```bash
# Run all tests in watch mode
npm test

# Run tests once (CI mode)
npm test -- --watchAll=false

# Run with coverage
npm test -- --coverage
```

### Test Structure

Tests are located alongside components:
```
src/
├── App.js
├── App.test.js
└── components/
    ├── TextChat.js
    └── TextChat.test.js
```

### Writing Tests

Use React Testing Library patterns:

```javascript
import { render, screen } from '@testing-library/react';
import TextChat from './TextChat';

test('renders message input', () => {
  render(<TextChat />);
  const input = screen.getByPlaceholderText(/write a response/i);
  expect(input).toBeInTheDocument();
});
```

## Deployment

### Production Build

1. Create optimized build:
```bash
npm run build
```

2. The `build/` folder contains:
   - Minified JavaScript bundles
   - Optimized CSS
   - Compressed assets
   - HTML with cache-busting hashes

### Deployment Options

#### Static Hosting
Deploy to services like:
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repos
- **AWS S3 + CloudFront**: Scalable CDN hosting

#### Deployment Steps (Example: Netlify)

1. Build the project:
```bash
npm run build
```

2. Deploy build folder to Netlify:
```bash
netlify deploy --prod --dir=build
```

Or use Netlify's web interface to drag-and-drop the `build/` folder.

### Environment Variables

Create `.env` files for different environments:

```bash
# .env.development
REACT_APP_API_URL=http://localhost:8000

# .env.production
REACT_APP_API_URL=https://api.elios-ai.com
```

Access in code:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Browser Support

### Production
- Browsers with >0.2% market share
- Not dead browsers
- Excludes Opera Mini

### Development
- Latest Chrome
- Latest Firefox
- Latest Safari

## Performance

### Metrics
The app tracks Web Vitals:
- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1

### Optimization
- Code splitting (future)
- Lazy loading (future)
- Asset optimization
- CSS animations (GPU-accelerated)

## Accessibility

- Semantic HTML elements
- Keyboard navigation support
- Material Icons with proper labels
- ARIA attributes (future enhancement)
- Screen reader compatibility (future enhancement)

## Contributing

### Branch Naming
- `feat/feature-name`: New features
- `fix/bug-description`: Bug fixes
- `docs/documentation-update`: Documentation changes

### Commit Messages
Follow conventional commits:
```
feat: add voice recording functionality
fix: resolve message scroll issue
docs: update API specification
```

### Pull Request Process
1. Create feature branch from main
2. Implement changes following code standards
3. Write/update tests
4. Update documentation
5. Submit pull request with clear description

## Troubleshooting

### Common Issues

**Issue**: `npm start` fails
- **Solution**: Delete `node_modules/` and `package-lock.json`, then run `npm install`

**Issue**: Port 3000 already in use
- **Solution**: Kill process on port 3000 or set custom port: `PORT=3001 npm start`

**Issue**: CSS changes not reflecting
- **Solution**: Clear browser cache or hard refresh (Ctrl+Shift+R)

## Learn More

### React Documentation
- [React Documentation](https://react.dev)
- [Create React App Docs](https://create-react-app.dev)
- [React Hooks Guide](https://react.dev/reference/react)

### Additional Resources
- [Web Vitals](https://web.dev/vitals/)
- [Material Icons](https://fonts.google.com/icons)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## License

This project is private and proprietary.

## Support

For questions or issues, please contact the development team.

---

**Last Updated**: November 2025
**Version**: 0.1.0
**Status**: In Development
