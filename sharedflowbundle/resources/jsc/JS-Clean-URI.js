try{
    var uri     = context.getVariable("request.uri");
    uri = uri.replace(/\//g,'$');
    
    context.setVariable("flow.request.uri", uri);
    
}catch(error){
    context.setVariable("flow.error.js.isError", true);
}