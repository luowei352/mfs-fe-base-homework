var connect = require("connect");
var serveStatic = require("serve-static");
 
var app = connect();
app.use(serveStatic("D:\项目文件夹"));
 
app.listen(5000);