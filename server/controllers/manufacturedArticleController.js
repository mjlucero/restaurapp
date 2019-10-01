const ManufacturedArticle = require('../models/manufacturedArticle');
const { getSumOfArticlesPurchasePrice } = require('../utils');

const createManufacturedArticle = (denomination, estimatedTime,articles) => {
    let salePrice = getSumOfArticlesPurchasePrice(articles);
    
    let manufacturedArticle = new ManufacturedArticle({
        denomination,
        salePrice,
        estimatedTime,
        articles
    });

    return manufacturedArticle.save();
};

const updateManufacturedArticle = (id, denomination, estimatedTime, articles) => {
    let salePrice = getSumOfArticlesPurchasePrice(articles);
    
    let manufacturedArticle = {
        denomination,
        salePrice,
        estimatedTime,
        articles
    };

    return ManufacturedArticle.findOneAndUpdate(id, manufacturedArticle, { new: true, runValidators: true });
};

const getManufacturedArticles = async (from, limit) => {
    let manufacturedArticles = await ManufacturedArticle.find({})
                                    .skip(from)
                                    .limit(limit)
                                    .populate({path: 'articles.article', select: '-_id denomination measure', populate: {path: "type", select: 'denomination -_id'}});

    let total = await ManufacturedArticle.countDocuments({});

    return {
        manufacturedArticles,
        total
    };
};

const getManufacturedArticle = id => ManufacturedArticle.findById(id)
                                        .populate('articles')
                                        .populate('articles.type', 'denomination');

const deleteManufacturedArticle = id => ManufacturedArticle.findOneAndUpdate(id, { active: false }, { new: true });

module.exports = {
    createManufacturedArticle,
    updateManufacturedArticle,
    getManufacturedArticles,
    getManufacturedArticle,
    deleteManufacturedArticle
};