# KUZA Partners - Organizational Excellence

A modular web application for KUZA Partners, architects of organizational excellence across Africa.

## Project Structure

```text
kuza_home/
├── .agent/                # AI Agent Context Instructions
├── assets/                # Global static assets (Images, Fonts)
├── frontend/              # Frontend Application
│   ├── css/               # Stylesheets
│   ├── js/                # Client-side Logic (app.js)
│   └── index.html         # Main Entry Point
└── backend/               # Backend API (Node.js/Express)
    ├── src/               # Source Code
    │   ├── routes/        # API Routes
    │   ├── controllers/   # Route Handlers
    │   └── server.js      # Server Configuration
    └── package.json       # Backend Dependencies
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Project
1.  Start the backend server:
    ```bash
    npm start
    ```
2.  Open `frontend/index.html` in your browser to view the site.

## Development Roles
This project is designed to be maintained by specialized AI agents:
- **Frontend Agent**: Rules defined in `.agent/frontend_agent.md`
- **Backend Agent**: Rules defined in `.agent/backend_agent.md`

## License
© 2026 KUZA Partners. All rights reserved.
