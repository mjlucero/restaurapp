module.exports.getSumOfArticlesPurchasePrice = articles => {
  let sum = 0;

  articles.forEach(article => {
    sum += article.salePrice * article.quantity;
  });

  return sum;
};

module.exports.setSubtotalOfDetails = details => {
  details.forEach(detail => {
    detail.subtotal = 0;
    detail.subtotal += detail.article.salePrice * detail.quantity;
    detail.subtotal += detail.manufacturedArticle.salePrice * detail.quantity;
  });
};
