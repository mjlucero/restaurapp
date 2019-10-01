const express = require("express");
const app = express();

const articleController = require("../controllers/articleController");
const asyncHandler = require("../middlewares/async-handler");

app.post("/articles", asyncHandler(async (req, res, next) => {
    let { denomination, purchasePrice, salePrice, stock, measure, isInput, type } = req.body;

    let article = await articleController.createArticle(denomination, purchasePrice, salePrice, stock, measure, isInput, type);

    res.json({
        ok: true,
        article
    });
}));

app.put("/articles/:id", asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let { denomination, purchasePrice, salePrice, stock, measure, isInput, type } = req.body;

    let article = await articleController.updateArticle(id, denomination, purchasePrice, salePrice, stock, measure, isInput, type);

    res.json({
        ok: true,
        article
    });
}));

app.get("/articles", asyncHandler(async (req, res, next) => {
    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 5;
    limit = Number(limit);

    let response = await articleController.getArticles(from, limit);

    res.json({
        ok: true,
        articles: response.articles,
        total: response.total
    })
}));

app.get("/articles/:id", asyncHandler(async (req, res, next) => {
    let id = req.params.id;

    let article = await articleController.getArticle(id);

    res.json({
        ok: true,
        article
    })
}));

app.delete("/articles/:id", asyncHandler(async (req, res, next) => {
    let id = req.params.id;

    let articleDeleted = await articleController.deleteArticle(id);

    res.json({
        ok: true,
        article: articleDeleted
    })
}));

module.exports = app;