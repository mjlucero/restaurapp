export class Form {
    constructor(
        public fields: Array<Field>
    ) {}
}

export class Field {

    constructor(
        public name: string,
        public type: 'text' | 'password' | 'select',
        public placeholder: string,
        public label: string,
        public classes: string = '',
        public sizeColumn: 'w-100' | 'w-50' | 'w-25' = 'w-100',
        public fieldErrors: Array<FieldError>,
        public onClick: Function,
        public onFocus: Function,
    ) { }
}

export class FieldError {
    constructor(
        public text: string = '',
        public strongText: string = '',
        public hasError: string = '',
        public showError: boolean = false
    ) {}
}
