const Article = require('../models/article');

const createArticle = (denomination, purchasePrice, salePrice, stock, measure, isInput, type) => {
    let article = new Article({
        denomination,
        purchasePrice,
        salePrice,
        stock,
        measure,
        isInput,
        type
    });

    return article.save();
};

const updateArticle = (id, denomination, purchasePrice, salePrice, stock, measure, isInput, type) => {
    let article = {
        denomination,
        purchasePrice,
        salePrice,
        stock,
        measure,
        isInput,
        type
    };

    return Article.findOneAndUpdate(id, article, { new: true, runValidators: true });
};

const getArticles = async (from, limit) => {
    let articles = await Article.find({}).skip(from).limit(limit).populate('type', 'denomination');

    let total = await Article.countDocuments({});

    return {
        articles,
        total
    };
};

const getArticle = id => Article.findById(id).populate('type', 'denomination');

const deleteArticle = id => Article.findOneAndUpdate(id, { active: false }, { new: true });

module.exports = {
    createArticle,
    updateArticle,
    getArticles,
    getArticle,
    deleteArticle
};