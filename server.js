const express = require('express');
const path = require('path'); 
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop Gamingowy', price: 4500 },
    { id: 2, name: 'Myszka Bezprzewodowa', price: 120 },
    { id: 3, name: 'Klawiatura Mechaniczna', price: 350 },
    { id: 4, name: 'Monitor 27"', price: 1200 }
  ];
  res.json(products);
});

app.get('/api/welcome', (req, res) => {
    res.send('Witaj w projekcie zaliczeniowym WSEI!');
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



if (require.main === module) {
  app.listen(port, () => {
    console.log(`Aplikacja działa na porcie http://localhost:${port}`);
  });
}

module.exports = app;