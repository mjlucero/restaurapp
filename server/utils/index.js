module.exports.getSumOfArticlesPurchasePrice = (articles) => {
    let sum = 0;
    
    articles.forEach(article => {
        sum += article.salePrice * article.quantity;
    });

    return sum;
};