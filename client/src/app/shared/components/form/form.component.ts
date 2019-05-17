import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from './../../models';

@Component({
    selector: 'app-form',
    templateUrl: 'form.component.html',
})

export class FormComponent {

    public formGroup: FormGroup;
    @Input() public form: Form;

    constructor(

    ) { }
}
