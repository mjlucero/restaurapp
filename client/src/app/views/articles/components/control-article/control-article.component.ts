import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Article, ErrorStateForms } from '../../../../shared/models';
import { StockService, ApiService } from '../../../../shared/services';
@Component({
    selector: 'app-control-article',
    templateUrl: 'control-article.component.html'
})

export class ControlArticleComponent implements OnInit{
    public title: string;
    public stockForm: FormGroup;
    public matcher: ErrorStateForms;
    private article: Article;
    constructor(
        private builder: FormBuilder,
        private stockService: StockService,
        private apiService: ApiService,
    ) {
        this.title = 'Agregar articulo';
    }

    ngOnInit( ) {
        this.article = this.stockService.getSelectedArticle();
        this.createStockForm();
    }
    createStockForm() {
        this.stockForm = this.builder.group({
            'denomination': ['', [Validators.required]],
            'salePrice': ['', [Validators.required, Validators.pattern(/\d+/)]],
            'purchasePrice': ['', [Validators.required, Validators.pattern(/\d+/)]],
            'stock': ['1', [Validators.required, Validators.pattern(/\d+/)]],
            'measure': ['', [Validators.required, Validators.pattern(/\d+/)]],
            'isInput': [false],
            'type': ['', [Validators.required]]
        });

        if ( this.article ) {
            for (const key of Object.keys(this.article)) {
                this.stockForm.get(key).setValue(this.article[key]);
            }
            this.title = 'Modificar articulo';
        }

        this.matcher = new ErrorStateForms();
    }

    createArticle() {
        if ( this.stockForm.invalid ) {
            for (const item of Object.keys(this.stockForm.value)) {
                this.stockForm.get(item).markAsDirty();
                this.stockForm.get(item).markAsTouched();
            }
            return;
        }

        // this.apiService.post('article')
    }
}