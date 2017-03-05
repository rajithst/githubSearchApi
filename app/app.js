/**
 * Created by rajith on 3/5/17.
 */

var express =require('express');

var app = express();

app.use(express.static(__dirname+"/public"));

app.listen(3000,function () {

  console.log("listening to port")

})
