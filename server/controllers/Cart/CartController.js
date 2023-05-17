const apiInstance = require('../../utils/apiInstance');

const getCartItems = async () => {
  const response = await apiInstance.get('/cart');
  return response.data;
};

const addCartItem = async (data) => {
  await apiInstance.post('/cart', data);
};

module.exports = {
  getCartItems,
  addCartItem,
};
