const apiInstance = require('../../utils/apiInstance');

const calculateAvg = (ratingsData) => {
  let weightedSum = 0;
  let totalCount = 0;
  Object.keys(ratingsData).forEach((rating) => {
    const count = parseInt(ratingsData[rating], 10);
    weightedSum += parseInt(rating, 10) * count;
    totalCount += count;
  });
  const averageRating = weightedSum / totalCount;
  return averageRating.toFixed(2);
};

const getProducts = async () => {
  const response = await apiInstance.get('/products');
  return response.data;
};

const getProductStyle = async (id) => {
  const response = await apiInstance.get(`/products/${id}/styles`);
  return response.data.results;
};

const getProduct = async (id) => {
  const [productResponse /*, styles, reviewsResponse, metadataResponse*/] = await Promise.all([
    apiInstance.get(`/products/${id}`),
    // getProductStyle(id),
    // apiInstance.get(`/reviews?product_id=${id}`),
    // apiInstance.get(`/reviews/meta?product_id=${id}`),
  ]);
  return {
    ...productResponse.data,
    styles: 0,
    reviewCount: 0 /*reviewsResponse.data.count*/,
    averageReview: 0 /*calculateAvg(metadataResponse.data.ratings)*/,
  };
};

module.exports = {
  getProducts,
  getProduct,
  getProductStyle,
};
