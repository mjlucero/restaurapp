module.exports.getSumOfArticlesPucharasePrice = (articles) => {
    let sum;
    
    articles.forEach(article => {
        sum += article.pucharasePrice || 0 * quantity || 0;
    });

    return sum;
}