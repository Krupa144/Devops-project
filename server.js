const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Cześć! To jest projekt zaliczeniowy WSEI.');
});

app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 2500 },
    { id: 2, name: 'Myszka', price: 50 },
    { id: 3, name: 'Klawiatura', price: 150 }
  ];
  res.json(products);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Aplikacja działa na porcie ${port}`);
  });
}

module.exports = app;