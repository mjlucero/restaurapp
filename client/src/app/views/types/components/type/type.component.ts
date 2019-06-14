import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-type',
    templateUrl: 'type.component.html'
})
export class TypeComponent implements OnInit {

    constructor( private router: Router ) { }
    ngOnInit() { }
}
