import { Component, OnInit, Output, OnChanges, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: 'grid.component.html'
})

export class GridComponent implements OnInit, OnChanges {
    @Input() columns;
    @Input() rows;
    @Output() rowSelected = new EventEmitter();
    selected: any[] = [];

    constructor() { }

    ngOnInit() { }
    ngOnChanges() {
    }

    onSelect(evt) {
        this.rowSelected.emit(this.selected[0]);
    }
}
