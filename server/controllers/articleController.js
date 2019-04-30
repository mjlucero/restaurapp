const Article = require('../models/article');

const createArticle = (denomination, pucharasePrice, salePrice, stock, measure, isInput, type) => {

    let article = new Article({
        denomination,
        pucharasePrice,
        salePrice,
        stock,
        measure,
        isInput,
        type
    });

    return article.save();
}

const updateArticle = (id, denomination, pucharasePrice, salePrice, stock, measure, isInput, type) => {

    let article = {
        denomination,
        pucharasePrice,
        salePrice,
        stock,
        measure,
        isInput,
        type
    }

    return Article.findOneAndUpdate(id, article, { new: true, runValidators: true });
}

const getArticles = async (from, limit) => {

    let articles = await Article.find({}).skip(from).limit(limit).populate('type', 'denomination');

    let total = await Article.countDocuments({});

    let response = {
        articles,
        total
    }

    return response;
}

const getArticle = id => Article.findById(id).populate('type', 'denomination');

const deleteArticle = id => Article.findOneAndUpdate(id, { active: false }, { new: true });


module.exports = {
    createArticle,
    updateArticle,
    getArticles,
    getArticle,
    deleteArticle
}