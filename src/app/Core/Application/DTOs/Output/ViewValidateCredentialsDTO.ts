export class ViewValidateCredentialsDTO{
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: any;

    constructor(id?: number,
        firstName?: string,
        lastName?: string,
        email?: string,
        role?: any
    ){
        this.id = id,
        this.firstName = firstName
        this.lastName = lastName,
        this.email = email,
        this.role = role
    }
}