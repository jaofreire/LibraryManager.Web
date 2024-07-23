export class ApiResponse<T>{
    operationType: string;
    isSuccessfully: boolean;
    codeResponse: number;
    message?: string
    dataResponse?: T;
    dataResponseList?: T[];

    constructor(private data: any){
        this.operationType = data.operationType;
        this.isSuccessfully = data.isSuccessfully;
        this.codeResponse = data.codeResponse;
        this.message = data.message;
        this.dataResponse = data.dataResponse;
        this.dataResponseList = data.dataResponseList;
    }
    
}