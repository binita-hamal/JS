//
function functionLogger(someFunc,someArg){
    console.log("function starting");
    let r=someFunc(someArg);
    console.log("Function complete");
    return r;
}
