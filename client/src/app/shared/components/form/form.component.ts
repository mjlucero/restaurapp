import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Form } from './../../models';
import { ErrorStateForms } from './../../models/errorStateForms.model';

@Component({
    selector: 'app-form',
    templateUrl: 'form.component.html',
})

export class FormComponent {

    public matcher: ErrorStateForms;
    public dynamicForm: FormGroup;
    @Input() public form: Form;

    constructor(
        private builder: FormBuilder
    ) {
        this.createForm();
    }

    createForm() {
        const listInputsForm = {};
        for (const field of this.form.fields) {
            const formControl: FormControl = new FormControl(field.defaultValue);
            formControl.setValidators(field.validators);
            listInputsForm[field.name] = formControl;
        }
        this.dynamicForm = this.builder.group(listInputsForm);
        this.matcher = new ErrorStateForms();
    }
}
