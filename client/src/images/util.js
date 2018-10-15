function jsonifyError(err) {
    return JSON.stringify(prepareErrorObj(err));
}

function prepareErrorObj(err) {
    var errObj = {};
    var countsArray;

    var msg = err.message;

    countsArray = findNewLinesCountInfo(msg);
    if(countsArray.length > 3) {
        msg = msg.substring(0, countsArray[2]);
    }

    errObj.msg = msg;

    var trace = err.stack;
    countsArray = findNewLinesCountInfo(trace);
    if(countsArray.length > 3) {
        trace = trace.substring(0, countsArray[2]);
    }

    errObj.trace = trace;

    if (!!err.original) {
        errObj.original = prepareErrorObj(err.original);
    }

    return errObj;
}

function findNewLinesCountInfo(str){
    var indices = [];
    for(var i=0; i<str.length;i++) {
        if (str[i] === "\n") indices.push(i);
    }

    return indices;
}