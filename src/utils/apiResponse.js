class apiResponse{
    constructor(StatusCode,data ,message="sucess"){
        this.StatusCode=StatusCode;
        this.data=data;
        this.message=message
        this.success=StatusCode<400
    }
}