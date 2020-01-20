export class User {
    private userId : number;
    private username : string;
    private password : string;
    private fullName : string;
    private position : string;
    private divnName : string;
    private divnId : number;
    private status : string;

    set setUserId(value:number) {
        this.userId = value;
    }

    get getUserId(): number{
        return this.userId;
    }
    
    set setUserName(value:string) {
        this.username = value;
    }
    get getUserName(): string{
        return this.username;
    }

    set setPassword(value:string) {
        this.password = value;
    }
    get getPassword(): string{
        return this.password;
    }

    set setFullName(value:string) {
        this.fullName = value;
    }
    get getFullName(): string{
        return this.fullName;
    }

    set setPosition(value:string) {
        this.position = value;
    }
    get getPosition(): string{
        return this.position;
    }

    set setDivnName(value:string) {
        this.divnName = value;
    }
    get getDivnName(): string{
        return this.divnName;
    }

    set setDivnId(value:number) {
        this.divnId = value;
    }
    get getDivnId(): number{
        return this.divnId;
    }

    set setStatus(value:string) {
        this.status = value;
    }
    get getStatus(): string{
        return this.status;
    }

}
