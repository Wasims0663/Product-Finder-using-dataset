require('dotenv').config(); // Load environment variables

const express = require('express');
const { google } = require('googleapis');
const app = express();
const PORT = process.env.PORT || 4000;

// Load the credentials from the environment variable
const keys = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// Create a JWT client for authentication
const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/cse']
);

// Function to perform the search using Google Custom Search API
async function performSearch(query) {
    const customSearch = google.customsearch('v1');
    const res = await customSearch.cse.list({
        auth: client,
        cx: 'e72cd64713bb54065', // Your Custom Search Engine ID
        q: query,
    });
    return res.data.items; // Return search results
}

// API route for searching products
app.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const results = await performSearch(query);
        res.json(results);
    } catch (error) {
        console.error('Error performing search:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Handle NLP interactions
app.get('/nlp', (req, res) => {
    // Simulate a simple chatbot interaction
    const menu = `
        Hi, how can I assist you today?
        1. Chat with the chatbot
        2. Search for a product
        3. Exit
    `;
    res.send(`<pre>${menu}</pre>`);
});

// Route for handling user selection from the menu
app.get('/nlp/option', (req, res) => {
    const option = req.query.option;

    switch (option) {
        case '1':
            res.send('You chose to chat with the chatbot. (Implement your chat logic here)');
            break;
        case '2':
            res.redirect('/'); // Redirect to the search page
            break;
        case '3':
            res.send('Goodbye!'); // Simple exit message
            break;
        default:
            res.send('Invalid option, please try again.');
            break;
    }
});

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
