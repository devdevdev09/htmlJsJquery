// try catch
try{
    console.log("try");
    num[-1] = 0;
}catch(e){
    console.log(e);
}

// try catch finally
try{
    console.log("try");
    num[-1] = 0;
}catch(e){
    console.log(e);
}finally{
    console.log("finally message");
}

// try catch throw
try{
    throw ("new message");
}catch(e){
    console.log(e);
}

// try catch new Error
try{
    throw new Error("new message");
}catch(e){
    console.log(e.message);
}finally{
    console.log("finally message");
}

////////////////////////

