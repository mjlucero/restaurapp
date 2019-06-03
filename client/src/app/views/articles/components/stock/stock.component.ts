import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article, ErrorStateForms } from '../../../../shared/models';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
    selector: 'app-stock',
    templateUrl: 'stock.component.html'
})

export class StockComponent implements OnInit {
    public stockForm: FormGroup;
    public matcher: ErrorStateForms;
    constructor(
        private builder: FormBuilder,
        private router: Router
    ) {
        this.createStockForm();
    }
    ngOnInit() {
    }
    createStockForm() {
        this.stockForm = this.builder.group({
            'denomination': ['', [Validators.required]],
            'salePrice': ['', [Validators.required, Validators.pattern(/\d+/)]],
            'purchasePrice': ['', [Validators.required, Validators.pattern(/\d+/)]],
            'stock': ['1', [Validators.required, Validators.pattern(/\d+/)]],
            'measure': ['', [Validators.required, Validators.pattern(/\d+/)]],
        });

        this.matcher = new ErrorStateForms();
    }
}
