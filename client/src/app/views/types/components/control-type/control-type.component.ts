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
    public btnTitle: string;
    public typeForm: FormGroup;
    public matcher: ErrorStateForms;
    private type: Type;
    constructor(
        private builder: FormBuilder,
        private typeService: TypeService,
        private apiService: ApiService,
        private router: Router
    ) {  }

    ngOnInit( ) {
        this.type = this.typeService.getSelectedType();
        console.log('type', this.type);
        this.createStockForm();
    }
    createStockForm() {
        this.typeForm = this.builder.group({
            'denomination': ['', [Validators.required]]
        });

        switch (this.typeService.getAction()) {
            case 'delete':
                this.typeForm.patchValue(this.type);
                this.title = 'Borrar rubro';
                this.btnTitle = 'Eliminar rubro';
                break;
            case 'update':
                this.typeForm.patchValue(this.type);
                this.title = 'Modificar rubro';
                this.btnTitle = 'Actualizar rubro';
                break;
            default:
                this.title = 'Agregar rubro';
                this.btnTitle = 'Crear rubro';
                break;
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

        const request = this.typeService.getAction() === 'update'
                    ? this.apiService.put(`type/${this.type['_id']}`, this.typeForm.value)
                    : this.typeService.getAction() === 'delete'
                    ? this.apiService.delete(`type/${this.type['_id']}`)
                    : this.apiService.post('type', this.typeForm.value);

        request.subscribe(
            (val) => {
                this.router.navigate(['/items/type']);
            },
            (err) => console.log('error', err)
        );
    }
}
