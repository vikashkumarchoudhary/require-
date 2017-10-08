var _req = function (_request) {

// write your code withing this block
var regex=/import\s\.\/([a-z0-9]+)/g;
//var str=_request;
var m=(regex.exec(_request))[1];
//var m1=_request.split(" ")
//var m=eval((m1[1].split("/"))[3])//2.....
var m1=m+'.js';
console.log(m1);
//console.log(m);
var fs=require('fs');
var data=fs.readFileSync(m1)
//console.log(eval(data.toString()));
return(eval(data.toString()));
/*if(data.toString()=='exports')
{
 var reg1=/\module\.[a-z]+\=([a-z]+)/g;
 var m2=(reg1.exec(data.toString()
}*/
//return k(_req);
// ==================================

}

//console.log(argv[2],argv[3]);
/*process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});*/

var l=process.argv;
//console.log(l);
var p1='import ./'+l[2];
//console.log(p1)
_req(p1);
//console.log("tum chutiya hai")
//k("hello")
//foo(_req);
