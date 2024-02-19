const express = require('express');
const router = express.Router();
const {getProduct, getProductSearch, getProductId, postProduct, putProduct, deleteProduct} = require('./models');


router.use(express.json())

router.get('/products', getProduct);
  
router.get('/products/search',getProductSearch);

router.get('/products/:id', getProductId);
 
router.post('/products',postProduct);

router.put('/products/:id',putProduct,)

router.delete('/products/:id', deleteProduct);
 
module.exports = router;