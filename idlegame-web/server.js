const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './dist/idlegame-web')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/idlegame-web/browser/index.html'));
});

// Start the server
const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
