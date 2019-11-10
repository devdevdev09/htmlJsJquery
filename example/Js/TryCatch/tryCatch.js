try{
    throw new Error("new message");
}catch(e){
    console.log(e.message);
}

////////////////////////

try{
    throw ("new message");
}catch(e){
    console.log(e);
}