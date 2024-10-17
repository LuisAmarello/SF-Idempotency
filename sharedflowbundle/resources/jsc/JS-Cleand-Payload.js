try{
    var payload = context.getVariable("request.content");
    var uri     = context.getVariable("request.uri");
    payload = payload.replace(/\n/g,'').replace(/\t/g,'').replace(/ /g,'');
    uri = uri.replace(/\//g,'$');
    
    context.setVariable("flow.request.content", payload);
    context.setVariable("flow.request.uri", uri);
    
}catch(error){
    context.setVariable("flow.error.js.isError", true);
}