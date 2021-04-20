var fs = require("fs");
//这是一个异步的写法，先顺序执行到console再回调到function
fs.readFile('input.txt', function (err, data){
    if(err)return;
    console.log(data.toString());
});

console.log("程序执行结束!");