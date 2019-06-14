import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Type, ErrorStateForms } from '../../../../shared/models';
import { ApiService } from '../../../../shared/services';
import { TypeService } from '../../services/type.service';
@Component({
    selector: 'app-control-type',
    templateUrl: 'control-type.component.html'
})

export class ControlTypeComponent implements OnInit{
    public title: string;
    public typeForm: FormGroup;
    public matcher: ErrorStateForms;
    private type: Type;
    constructor(
        private builder: FormBuilder,
        private typeService: TypeService,
        private apiService: ApiService,
        private router: Router
    ) {
        this.title = 'Agregar rubro';
    }

    ngOnInit( ) {
        this.type = this.typeService.getSelectedType();
        this.createStockForm();
    }
    createStockForm() {
        this.typeForm = this.builder.group({
            'denomination': ['', [Validators.required]],
            'active': [true, [Validators.required]]
        });

        if ( this.type ) {
            for (const key of Object.keys(this.type)) {
                this.typeForm.get(key).setValue(this.type[key]);
            }
            this.title = 'Modificar rubro';
        }

        this.matcher = new ErrorStateForms();
    }

    createType() {
        if ( this.typeForm.invalid ) {
            for (const item of Object.keys(this.typeForm.value)) {
                this.typeForm.get(item).markAsDirty();
                this.typeForm.get(item).markAsTouched();
            }
            return;
        }

        this.apiService.post('type', this.typeForm.value).subscribe(
            (val) => {
                console.log('Todo feel and cool');
                this.router.navigate(['/items/type']);
            },
            (err) => console.log('error', err)
        );
    }
}
