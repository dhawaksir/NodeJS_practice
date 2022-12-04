var http= require("http");

http.createServer(function(req,res){
    // console.log('this is suraj jung chhetri ');
    res.write('this is sandesh');
    res.end();

}).listen(5050);