import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../shared/services';
import { map, tap } from 'rxjs/operators';
import { Type } from '../../../../shared/models';
import { TypeService } from '../../services/type.service';
@Component({
    selector: 'app-type',
    templateUrl: 'type.component.html'
})
export class TypeComponent implements OnInit {

    public columns;
    public rows;
    public selectedType: Type;
    constructor(
        private router: Router,
        private apiService: ApiService,
        private typeService: TypeService
    ) {
        this.columns = [
            { name: 'Denominación', prop: 'denomination' },
            { name: 'Activo', prop: 'active' }
        ];
    }
    ngOnInit() {
        this.getItems();
    }
    getItems() {
        this.apiService.get('type')
            .pipe(
                tap( console.log ),
                map(data => data['types']),
                map((data) => {
                    data.forEach((element, i) => {
                        data[i]['active'] = !element.active ? 'inactivo' : 'activo';
                    });
                    return data;
                }))
            .subscribe(data => {
                this.rows = data;
            });
    }

    rowSelected(type: Type) {
        this.selectedType = type;
    }
    goToController(type: 'add' | 'update') {
        if ( type === 'add') {
            this.typeService.setType(null);
        }
        this.router.navigate(['/items/control-type']);
    }
}
