import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Form } from './../../models';
import { ErrorStateForms } from './../../models/errorStateForms.model';

@Component({
    selector: 'app-form',
    templateUrl: 'form.component.html',
})

export class FormComponent implements OnChanges {

    public matcher: ErrorStateForms;
    public dynamicForm: FormGroup;
    @Input() form: Form = null;

    constructor(
        private builder: FormBuilder
    ) { }

    ngOnChanges() {
        if ( this.form ) {
            this.createForm();
        }
    }

    createForm() {
        const listInputsForm = {};
        console.log('object', this.form);
        for (const field of this.form.fields) {
            const formControl: FormControl = new FormControl(field.defaultValue);
            formControl.setValidators(field.validators);
            listInputsForm[field.name] = formControl;
        }
        this.dynamicForm = this.builder.group(listInputsForm);
        this.matcher = new ErrorStateForms();
    }
}
