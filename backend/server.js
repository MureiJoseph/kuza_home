const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
});

// Placeholder for future features
app.get('/api/programs', (req, res) => {
    res.json([
        { id: 'tmb', name: 'THE MANAGER BRIDGE™', duration: '8 weeks' }
    ]);
});

app.listen(port, () => {
    console.log(`KUZA Backend listening at http://localhost:${port}`);
});
