const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

__dirname = path.join(__dirname, 'public');
// Serve static files from the "public" directory
app.use(express.static(__dirname));

// Route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/product/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'product.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});