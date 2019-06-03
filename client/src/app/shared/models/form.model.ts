import { ValidatorFn, Validators } from '@angular/forms';

export class Form {
    constructor(
        public fields: Array<Field>
    ) {}
}

export class Field {

    public name: string;
    public defaultValue: any;
    public type: 'text' | 'password' | 'select';
    public placeholder: string;
    public label: string;
    public classes: string;
    public sizeColumn: 'w-100' | 'w-50' | 'w-33';
    public fieldErrors: Array<FieldError>;
    private validators: ValidatorFn[] = [];
    public onClick: Function;
    public onFocus: Function;

    constructor(
        name: string,
        defaultValue: any,
        type: 'text' | 'password' | 'select',
        placeholder: string,
        label: string,
        required: boolean
    ) {
        this.name = name;
        this.sizeColumn = 'w-100';
        this.defaultValue = defaultValue;
        this.type = type;
        this.placeholder = placeholder;
        this.label = label;
        if ( required ) {
            this.validators.push(Validators.required);
        }
    }

    addPatternValidator(pattern: RegExp) {
        const validator = Validators.pattern(pattern);
        this.validators.push(validator);
    }

    getValidators() {
        return this.validators;
    }
}

export class FieldError {
    public text: string;
    public strongText: string;
    public hasError: string;
    public showError: boolean;
    constructor(
        text: string = '',
        strongText: string = '',
        hasError: string = '',
        showError: boolean = false
    ) {
        this.text = text;
        this.strongText = strongText;
        this.hasError = hasError;
        this.showError = showError;
    }
}
