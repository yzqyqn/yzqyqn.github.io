
  //<circle cx="250" cy="250" r="70"  fill="red" />
 //<circle cx="250" cy="250" r="60"  fill="orange" />
 //<circle cx="250" cy="250" r="50"  fill="yellow" />
//<circle cx="250" cy="250" r="40"  fill="green" />
//<circle cx="250" cy="250" r="30"  fill="blue" />
//<circle cx="250" cy="250" r="20"  fill="purple "/>
var svg =d3.select('svg');
var r=svg.append('rect');
var c1=svg.append('circle');
var c2=svg.append('circle');
var c3=svg.append('circle');
var c4=svg.append('circle');
var c5=svg.append('circle');
var c6=svg.append('circle');
var p1 = svg.append('polygon');
 //c1.attr('cx',250).attr('cy',250).attr('r',70).attr('fill','red');   
  r.attr('x',25).attr('y',38).attr('rx',20).attr('ry',20).attr('width',450).attr('height',450).attr('fill','white').attr('stroke-width',5).attr('stroke','black').attr('opacity',0.5);
 function orange(){
      var a1 = Math.random()*200;
  var b1 = Math.random()*200;
  var d1 = Math.random()*100;
 c2.attr('cx',a1).attr('cy',b1).attr('r',d1).attr('fill','orange'); 

}
function yellow(){
    var a1 = Math.random()*200;
  var b1 = Math.random()*200;
  var d1 = Math.random()*100;
   c3.attr('cx',a1).attr('cy',b1).attr('r',d1).attr('fill','yellow'); 

}
function green(){
    var a1 = Math.random()*200;
  var b1 = Math.random()*200;
  var d1 = Math.random()*100;
     c4.attr('cx',a1).attr('cy',b1).attr('r',d1).attr('fill','green');
}
function blue(){
    var a1 = Math.random()*200;
  var b1 = Math.random()*200;
  var d1 = Math.random()*100;
  c5.attr('cx',a1).attr('cy',b1).attr('r',d1).attr('fill','blue');
}  
function purple(){
    var a1 = Math.random()*400;
  var b1 = Math.random()*400;
  var d1 = Math.random()*100;
   c3.attr('cx',b1).attr('cy',b1).attr('r',d1).attr('fill','yellow'); 
   c4.attr('cx',a1).attr('cy',b1).attr('r',d1).attr('fill','green');
  c2.attr('cx',a1).attr('cy',b1).attr('r',d1).attr('fill','orange');
  c5.attr('cx',a1).attr('cy',b1).attr('r',d1).attr('fill','purple');
}  