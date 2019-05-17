const ArticleManufactured = require('../models/articleManufactured');
const { getSumOfArticlesPucharasePrice } = require('../utils');

const createArticleManufactured = (denomination, estimatedTime,articles) => {

    let salePrice = getSumOfArticlesPucharasePrice(articles);
    
    let articleManufactured = new ArticleManufactured({
        denomination,
        salePrice,
        estimatedTime,
        articles
    });

    return articleManufactured.save();
}

const updateArticleManufactured = (id, denomination, estimatedTime, articles) => {

    let salePrice = getSumOfArticlesPucharasePrice(articles);
    
    let articleManufactured = {
        denomination,
        salePrice,
        estimatedTime,
        articles
    }

    return ArticleManufactured.findOneAndUpdate(id, articleManufactured, { new: true, runValidators: true });
}

const getArticlesManufactured = async (from, limit) => {

    let articlesManufactured = await ArticleManufactured.find({})
                                    .skip(from)
                                    .limit(limit)
                                    .populate('articles')
                                    .populate('articles.type', 'denomination');

    let total = await ArticleManufactured.countDocuments({});

    let response = {
        articlesManufactured,
        total
    }

    return response;
}


const getArticleManufactured = id => ArticleManufactured.findById(id)
                                        .populate('articles')
                                        .populate('articles.type', 'denomination');

const deleteArticleManufactured = id => Article.findOneAndUpdate(id, { active: false }, { new: true });

module.exports = {
    createArticleManufactured,
    updateArticleManufactured,
    getArticlesManufactured,
    getArticleManufactured,
    deleteArticleManufactured
}