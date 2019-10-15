const express = require("express");
const app = express();

const manufacturedArticleController = require("../controllers/manufacturedArticleController");
const asyncHandler = require("../middlewares/async-handler");

app.post(
  "/manufactured-articles",
  asyncHandler(async (req, res, next) => {
    let { denomination, estimatedTime, articles } = req.body;

    let manufacturedArticle = await manufacturedArticleController.createManufacturedArticle(
      denomination,
      estimatedTime,
      articles
    );

    res.json({
      ok: true,
      manufacturedArticle
    });
  })
);

app.put(
  "/manufactured-articles/:id",
  asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let { denomination, purchasePrice, salePrice, stock, measure, isInput, type } = req.body;

    let article = await articleController.updateArticle(
      id,
      denomination,
      purchasePrice,
      salePrice,
      stock,
      measure,
      isInput,
      type
    );

    res.json({
      ok: true,
      article
    });
  })
);

app.get(
  "/manufactured-articles",
  asyncHandler(async (req, res, next) => {
    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 5;
    limit = Number(limit);

    let response = await manufacturedArticleController.getManufacturedArticles(from, limit);

    res.json({
      ok: true,
      manufacturedArticles: response.manufacturedArticles,
      total: response.total
    });
  })
);

app.get(
  "/manufactured-articles/:id",
  asyncHandler(async (req, res, next) => {
    let id = req.params.id;

    let article = await articleController.getArticle(id);

    res.json({
      ok: true,
      article
    });
  })
);

app.delete(
  "/manufactured-articles/:id",
  asyncHandler(async (req, res, next) => {
    let id = req.params.id;

    let articleDeleted = await articleController.deleteArticle(id);

    res.json({
      ok: true,
      article: articleDeleted
    });
  })
);

module.exports = app;
