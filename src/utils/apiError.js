class apiError extends Error{
    constructor(StatusCode,message="something went wrong",errors=[],statck=""){
        super(message)
        this.StatusCode=StatusCode,
        this.message=message,
        this.errors=errors,
        this.stack=statck,
        this.success=false
        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export{Error}