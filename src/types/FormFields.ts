export interface IFormFields {
    name: string;
    type: 'text' | 'email' | 'password' | 'tel' | 'number';
    label: string;
    placeHolder: string;
}