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

#### For macOS
- **Node.js** (v14 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js, v6 or higher)
- **Git** (usually pre-installed, or install via Xcode Command Line Tools: `xcode-select --install`)

#### For Windows
- **Node.js** (v14 or higher) - [Download from nodejs.org](https://nodejs.org/)
  - Choose the LTS version for stability
  - The installer will also install npm automatically
- **Git** - [Download from git-scm.com](https://git-scm.com/download/win)
  - Or use Git for Windows if you prefer a GUI

### Installation Steps

#### Step 1: Clone the Repository

**macOS/Linux:**
```bash
git clone <repository-url>
cd Mock-Interview-Bot/view
```

**Windows (Command Prompt):**
```cmd
git clone <repository-url>
cd Mock-Interview-Bot\view
```

**Windows (PowerShell):**
```powershell
git clone <repository-url>
cd Mock-Interview-Bot\view
```

#### Step 2: Install Dependencies

**macOS/Linux:**
```bash
npm install
```

**Windows:**
```cmd
npm install
```

**Note**: If you encounter permission errors on macOS/Linux, you may need to use `sudo` (not recommended) or fix npm permissions. On Windows, run Command Prompt or PowerShell as Administrator if needed.

#### Step 3: Configure Environment Variables

Create a `.env` file in the `view` directory:

**macOS/Linux:**
```bash
cd view
touch .env
```

**Windows (Command Prompt):**
```cmd
cd view
type nul > .env
```

**Windows (PowerShell):**
```powershell
cd view
New-Item -ItemType File -Name .env
```

Then add the following content to `.env`:
```env
# Backend API URL
# Change this if your backend is running on a different host/port
REACT_APP_API_URL=http://localhost:8000
```

**Note**:
- If your backend is running on a different machine, replace `localhost` with the actual IP address or hostname
- For example: `REACT_APP_API_URL=http://192.168.1.100:8000`
- If using HTTPS: `REACT_APP_API_URL=https://api.example.com`

#### Step 4: Start the Development Server

**macOS/Linux:**
```bash
npm start
```

**Windows:**
```cmd
npm start
```

The development server will start and automatically open your browser to `http://localhost:3000`.

**Note**:
- If port 3000 is already in use, React will prompt you to use a different port (e.g., 3001)
- The app will automatically reload when you make changes to the source code
- Press `Ctrl+C` (or `Cmd+C` on macOS) to stop the server

### Running on Different Machines

#### Frontend and Backend on Same Machine
1. Ensure backend is running on `http://localhost:8000`
2. Use default `.env` configuration: `REACT_APP_API_URL=http://localhost:8000`
3. Start frontend: `npm start`

#### Frontend and Backend on Different Machines

**Scenario**: Frontend on Machine A, Backend on Machine B

1. **On Machine B (Backend):**
   - Ensure backend is running and accessible
   - Note the IP address of Machine B (e.g., `192.168.1.100`)
   - Ensure firewall allows connections on port 8000

2. **On Machine A (Frontend):**
   - Update `.env` file:
     ```env
     REACT_APP_API_URL=http://192.168.1.100:8000
     ```
   - Replace `192.168.1.100` with Machine B's actual IP address
   - Restart the development server: `npm start`

**macOS Firewall Configuration:**
```bash
# Allow incoming connections on port 8000
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /path/to/backend
```

**Windows Firewall Configuration:**
1. Open Windows Defender Firewall
2. Click "Advanced settings"
3. Create inbound rule for port 8000 (TCP)
4. Allow the connection

#### Finding Your IP Address

**macOS:**
```bash
# For local network
ifconfig | grep "inet " | grep -v 127.0.0.1

# Or use
ipconfig getifaddr en0  # For Wi-Fi
ipconfig getifaddr en1  # For Ethernet
```

**Windows (Command Prompt):**
```cmd
ipconfig
```
Look for "IPv4 Address" under your active network adapter.

**Windows (PowerShell):**
```powershell
Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notlike "*Loopback*"}
```

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

#### `npm start` fails

**Symptoms**: Error messages during startup, missing dependencies, or build failures.

**Solutions**:

1. **Clean install (All Platforms):**
   ```bash
   # Delete node_modules and lock file
   rm -rf node_modules package-lock.json  # macOS/Linux
   # OR
   rmdir /s /q node_modules & del package-lock.json  # Windows CMD
   # OR
   Remove-Item -Recurse -Force node_modules, package-lock.json  # Windows PowerShell

   # Reinstall
   npm install
   ```

2. **Clear npm cache:**
   ```bash
   npm cache clean --force
   npm install
   ```

3. **Check Node.js version:**
   ```bash
   node --version  # Should be v14 or higher
   npm --version   # Should be v6 or higher
   ```

4. **Permission errors (macOS/Linux):**
   ```bash
   # Fix npm permissions (recommended)
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   # Add to ~/.bashrc or ~/.zshrc:
   export PATH=~/.npm-global/bin:$PATH
   ```

#### Port 3000 already in use

**Symptoms**: Error message "Port 3000 is already in use" or "EADDRINUSE".

**Solutions**:

1. **Use a different port:**
   ```bash
   # macOS/Linux
   PORT=3001 npm start

   # Windows (Command Prompt)
   set PORT=3001 && npm start

   # Windows (PowerShell)
   $env:PORT=3001; npm start
   ```

2. **Kill the process using port 3000:**

   **macOS/Linux:**
   ```bash
   # Find process
   lsof -ti:3000
   # Kill process
   kill -9 $(lsof -ti:3000)
   ```

   **Windows:**
   ```cmd
   # Find process
   netstat -ano | findstr :3000
   # Kill process (replace PID with actual process ID)
   taskkill /PID <PID> /F
   ```

   **Windows (PowerShell):**
   ```powershell
   # Find and kill process
   Get-NetTCPConnection -LocalPort 3000 | Select-Object -ExpandProperty OwningProcess | ForEach-Object { Stop-Process -Id $_ -Force }
   ```

#### Cannot connect to backend API

**Symptoms**: Network errors, CORS errors, or "Failed to fetch" messages.

**Solutions**:

1. **Verify backend is running:**
   ```bash
   # Test backend connection
   curl http://localhost:8000/api/health  # macOS/Linux
   # OR
   curl.exe http://localhost:8000/api/health  # Windows (if curl is installed)
   ```

2. **Check `.env` file:**
   - Ensure `REACT_APP_API_URL` is set correctly
   - Restart development server after changing `.env`
   - On Windows, ensure no trailing spaces in `.env` file

3. **CORS issues:**
   - Ensure backend allows requests from `http://localhost:3000`
   - Check backend CORS configuration

4. **Firewall blocking connection:**
   - **macOS**: System Preferences → Security & Privacy → Firewall
   - **Windows**: Windows Defender Firewall → Allow an app through firewall

#### CSS changes not reflecting

**Symptoms**: Style changes don't appear in browser.

**Solutions**:

1. **Hard refresh browser:**
   - **macOS**: `Cmd+Shift+R` (Chrome/Firefox) or `Cmd+Option+R` (Safari)
   - **Windows**: `Ctrl+Shift+R` (Chrome/Firefox) or `Ctrl+F5` (Edge)

2. **Clear browser cache:**
   - Chrome: Settings → Privacy → Clear browsing data
   - Firefox: Settings → Privacy → Clear Data
   - Safari: Develop → Empty Caches

3. **Restart development server:**
   ```bash
   # Stop server (Ctrl+C or Cmd+C)
   # Then restart
   npm start
   ```

#### Module not found errors

**Symptoms**: "Cannot find module" or "Module not found" errors.

**Solutions**:

1. **Reinstall dependencies:**
   ```bash
   npm install
   ```

2. **Check file paths (Windows case sensitivity):**
   - Windows file system is case-insensitive, but Node.js is case-sensitive
   - Ensure import paths match exact file names

3. **Clear module cache:**
   ```bash
   # Delete .cache folder if it exists
   rm -rf .cache  # macOS/Linux
   rmdir /s /q .cache  # Windows
   ```

#### WebSocket connection issues

**Symptoms**: WebSocket fails to connect, connection drops frequently.

**Solutions**:

1. **Check WebSocket URL:**
   - Ensure backend WebSocket URL is correct
   - Use `ws://` for HTTP and `wss://` for HTTPS

2. **Network connectivity:**
   - Test backend WebSocket endpoint directly
   - Check firewall rules for WebSocket ports

3. **Browser compatibility:**
   - Ensure browser supports WebSockets
   - Try different browser (Chrome, Firefox, Edge)

#### npm command not found

**Symptoms**: "npm: command not found" or "npm is not recognized".

**Solutions**:

1. **Verify Node.js installation:**
   ```bash
   node --version
   npm --version
   ```

2. **Reinstall Node.js:**
   - Download and install from [nodejs.org](https://nodejs.org/)
   - Restart terminal/command prompt after installation

3. **Add to PATH (if needed):**
   - **macOS/Linux**: Usually automatic, check `~/.bashrc` or `~/.zshrc`
   - **Windows**: Node.js installer should add to PATH automatically

#### Git clone issues

**Symptoms**: Cannot clone repository, authentication errors.

**Solutions**:

1. **Check Git installation:**
   ```bash
   git --version
   ```

2. **Use HTTPS instead of SSH:**
   ```bash
   git clone https://github.com/user/repo.git
   ```

3. **Windows long path issues:**
   ```cmd
   # Enable long paths in Git
   git config --global core.longpaths true
   ```

#### Environment variables not working

**Symptoms**: `process.env.REACT_APP_API_URL` is undefined.

**Solutions**:

1. **File naming:**
   - Must be named exactly `.env` (not `.env.txt` or `.env.local`)
   - Must be in the `view` directory (project root)

2. **Variable naming:**
   - Must start with `REACT_APP_` prefix
   - Example: `REACT_APP_API_URL` (not `API_URL`)

3. **Restart server:**
   - Environment variables are read at build time
   - Must restart `npm start` after changing `.env`

4. **Windows line endings:**
   - Ensure `.env` file uses LF line endings (not CRLF)
   - Can convert with: `dos2unix .env` (if available) or use a text editor

### Platform-Specific Issues

#### macOS Specific

**Issue**: Permission denied errors
- **Solution**: Use `sudo` sparingly. Instead, fix npm permissions (see above)

**Issue**: Xcode Command Line Tools missing
- **Solution**: Run `xcode-select --install`

#### Windows Specific

**Issue**: Script execution policy (PowerShell)
- **Solution**: Run PowerShell as Administrator and execute:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

**Issue**: Path too long errors
- **Solution**: Enable long paths in Windows or move project to shorter path

**Issue**: Antivirus blocking node_modules
- **Solution**: Add project folder to antivirus exclusions

### Getting Help

If you encounter issues not covered here:

1. Check the [React documentation](https://react.dev)
2. Review [Create React App troubleshooting](https://create-react-app.dev/docs/troubleshooting)
3. Check browser console for detailed error messages
4. Review backend logs if API connection issues
5. Contact the development team with:
   - Error messages (full text)
   - Operating system and version
   - Node.js and npm versions (`node --version`, `npm --version`)
   - Steps to reproduce the issue

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
