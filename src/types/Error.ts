// export interface IError{
//     name?:'Name required.' | 'Name must be alphabets.';
//     email?:'Email is required.' | 'Invalid email format.';
//     phone?:'Phone numbere must have 10 digits';
//     password?:"Password Required" |
//             'Password must have 8 character' |
//              'Must contain at least one uppercase letter(A-Z)' |
//              'Must contain ar least one lowercase letter(a-z)' |
//              'Must include at least one numeric digit(1-9)' | 
//              'Must inclued at least one special character(eg: @,#,$,%,etc...)'
//              confirmPassword?:'Passwords do not match.'
// }

export interface IError {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
}