const express = require("express");
const app = express();

const articleController = require("../controllers/articleController");
const asyncHandler = require("../middlewares/async-handler");

app.post("/article", asyncHandler(async (req, res, next) => {

    let { denomination, pucharasePrice, salePrice, stock, measure, isInput, type } = req.body;

    let article = await articleController.createArticle(denomination, pucharasePrice, salePrice, stock, measure, isInput, type);

    res.json({
        ok: true,
        article
    });

}));

app.put("/article/:id", asyncHandler(async (req, res, next) => {

    let id = req.params.id;
    let { denomination, pucharasePrice, salePrice, stock, measure, isInput, type } = req.body;

    let article = await articleController.updateArticle(id, denomination, pucharasePrice, salePrice, stock, measure, isInput, type);

    res.json({
        ok: true,
        article
    });

}));

app.get("/article", asyncHandler(async (req, res, next) => {
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

app.get("/article/:id", asyncHandler(async (req, res, next) => {
    let id = req.params.id;

    let article = await articleController.getArticle(id);

    res.json({
        ok: true,
        article
    })
}));

app.delete("/article/:id", asyncHandler(async (req, res, next) => {
    let id = req.params.id;

    let articleDeleted = await articleController.deleteArticle(id);

    res.json({
        ok: true,
        article: articleDeleted
    })
}));

module.exports = app;