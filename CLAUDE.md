# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development Server
```bash
# Start local server for testing
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Custom Commands
```bash
# Custom reflection command
/reflection
```

### Deployment
- Project is configured for GitHub Pages
- Push to main branch to deploy automatically

## Project Architecture

This is a vanilla HTML/CSS/JavaScript JRPG game with no build tools or frameworks.

### Core Files
- **index.html** - Main entry point with menu system and audio controls
- **script.js** - Game logic and event handlers (30 lines)
- **styles.css** - Complete styling with animations and responsive design (117 lines)

### Game Systems
- **Menu System**: Event-driven navigation using DOM queries and event listeners
- **Audio System**: Background music (menuTune1.ogg) with play/pause and volume controls
- **UI Framework**: Custom CSS animations (flyIn effects) and button styling

### Current State
- Main menu fully functional with New Game, Load Game, Settings, Credits buttons
- Audio controls working (play/pause, volume slider defaulting to 30%)
- Only "New Game" button has click handler (shows placeholder content)
- Missing: actual game mechanics, save/load system, settings panel, credits screen

### Development Patterns
- Uses `document.querySelector()` and `getElementById()` for DOM manipulation
- Event listeners attached in script.js for user interactions
- CSS uses flexbox layout with rgba backgrounds for game container
- Audio element with loop attribute and volume control via JavaScript

## Memories
- Placeholder memory added to demonstrate memory tracking