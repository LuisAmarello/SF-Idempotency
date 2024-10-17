try {
    print (context.getVariable('sc-token-res.access_token'));
    
} catch (error) {
    context.setVariable("flow.error.js.isError", true);
}