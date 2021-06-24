export class User {
    pseudo: string = "";
    email: string = "";
    password: string = " ";

    
    constructor(user: User){
        Object.assign(user, this)
    }
}