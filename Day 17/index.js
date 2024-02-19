const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
//   GET /products: This route should return a list of all products.
app.get('/products', (req, res) => {
    res.send(products);
  });
  app.get('/products/search', (req, res) => {
    const minPrice = parseInt(req.query.minPrice);
    const maxPrice = parseInt(req.query.maxPrice);
  const filteredProducts = products.filter(product => product.price < maxPrice && product.price > minPrice);
  if (filteredProducts) {
    res.json(filteredProducts);
  } else {
    res.status(404).json({ message: 'Filtered Product not found' });
  }
  });
//   GET /products/:id: This route should return the details of a specific product identified by its ID.
  app.get('/products/:id', (req, res) => {
    let  Index = parseInt(req.params.id) 
    res.send(products[Index-1]);
  });
  app.post('/products', (req, res) => {
    const { nameData, priceData } = req.body;
    const nextID=products.length + 1
    const newProduct = { id: nextID, name: nameData, price: priceData };
    products.push(newProduct);
    res.json(products);
});
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { nameData, priceData } = req.body;
  const product = products.find(product => product.id === productId);

  if (product) {
    product.id = productId;
    product.name = nameData;
    product.price = priceData;
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }})
  app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(product => product.id !== productId);
    res.json(products);
  });
  let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  ];