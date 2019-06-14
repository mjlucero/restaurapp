import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
    providedIn: 'root'
})

export class StockService {

    private article: Article;

    constructor() {}

    getSelectedArticle() {
        return this.article || null;
    }

    setArticle(article: Article) {
        this.article = article;
    }
}