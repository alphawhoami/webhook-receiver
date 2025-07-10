const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.set('view engine', 'ejs');

let lastHeaders = {};
let lastBody = {};
let queryParams = {};

// Webhook endpoint to handle POST requests
app.post('/webhook', (req, res) => {
    // Store headers and body and query
    lastHeaders = req.headers;
    lastBody = req.body;
    
    // Respond with HTTP 200 status
    res.status(200).send('Received');
});

// Serve the webpage to display the latest webhook data
app.get('/', (req, res) => {
    queryParams = req.query;
  
    res.render('index', {queryParams: queryParams, headers: lastHeaders, body: lastBody });
});

app.post('/', (req, res) => {
    queryParams = req.query;
  
    res.render('index', {queryParams: queryParams, headers: lastHeaders, body: lastBody });
});
// Start the server
app.listen(port, () => {
    console.log(`Webhook receiver listening at http://localhost:${port}`);
});
