module.exports.getSumOfArticlesPurchasePrice = articles => {
  let sum = 0;

  articles.forEach(article => {
    sum += article.salePrice * article.quantity;
  });

  return sum;
};

module.exports.getSubtotalOfDetails = details => {
  return details.map(d => {
    d.subtotal = 0;
    d.subtotal += d.article.detail.salePrice * d.article.quantity;
    d.subtotal += d.manufacturedArticle.detail.salePrice * d.manufacturedArticle.quantity;

    return d;
  });
};
