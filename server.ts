//var sys = require("sys");
var my_http = require("http");
my_http.createServer(function(request,response){
    console.log("I am server code...");
    response.writeHeader(200,{"Content-Type":"text/plain"});
    response.write("Hello Friends!!!");
    response.end();
}).listen(8787);
console.log("Server running on 8787");