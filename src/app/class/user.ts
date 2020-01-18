export class User {
    private userId : number;
    private username : string;
    private fullName : string;
    private position : string;
    private divnName : string;
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

    set setStatus(value:string) {
        this.status = value;
    }
    get getStatus(): string{
        return this.status;
    }

}
