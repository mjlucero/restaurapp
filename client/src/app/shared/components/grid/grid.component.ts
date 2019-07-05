import { Component, OnInit, Output, OnChanges, Input, EventEmitter, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { DialogComponent } from './dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
    selector: 'app-grid',
    templateUrl: 'grid.component.html'
})

export class GridComponent implements OnInit, OnChanges {
    @Input() columns;
    @Input() rows;

    @Output() rowSelected = new EventEmitter();
    @Output() add = new EventEmitter();
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();

    @ViewChild('menu') matMenu: MatMenuTrigger;
    public elementToEditOrDelete: any;


    selected: any[] = [];
    arrKeys = [];
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }
    ngOnChanges() {
        if (this.rows) {
            for (const key of Object.keys(this.rows[0])) {
                if (key !== '_id' && key !== '__v') {
                    this.arrKeys.push(key);
                }
            }
        }
    }

    setItem(row) {
        this.elementToEditOrDelete = row;
    }

    addItem() {
        this.add.emit();
    }

    editItem() {
        this.edit.emit(this.elementToEditOrDelete);
    }
    deleteItem() {
        this.delete.emit(this.elementToEditOrDelete);
    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent);

        dialogRef.afterClosed().subscribe(remove => {
            if ( remove ) {
                this.deleteItem();
            }
        });
    }

    onTableContextMenu(contextMenuEvent) {
        contextMenuEvent.event.preventDefault();
        contextMenuEvent.event.stopPropagation();
        console.log('row', contextMenuEvent);
        this.matMenu.openMenu();
    }
}
