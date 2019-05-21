import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, Field, FieldError, Article } from '../../../../shared/models';
@Component({
    selector: 'app-stock',
    templateUrl: 'stock.component.html'
})

export class StockComponent implements OnInit {
    public articleForm: Form = null;
    constructor(
        private router: Router
    ) { }
    ngOnInit() {

    }
    addArticle() {
        const denomination: Field = new Field('denomination', '', 'text', 'denominacion', 'denominación');
        const purchasePrice: Field = new Field('pucharasePrice', '', 'text', 'Precio de compra', 'Precio de compra');
        const salePrice: Field = new Field('salePrice', '', 'text', 'Precio de venta', 'Precio de venta');
        const stock: Field = new Field('stock', 1, 'text', 'Cantidad', 'Cantidad');
        const measure: Field = new Field('measure', '', 'text', 'Medida', 'Medida');
        this.articleForm = new Form([denomination, purchasePrice, salePrice, stock, measure]);
        console.log('Puto formulario', this.articleForm);
    }
}
