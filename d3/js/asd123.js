
  //<circle cx="250" cy="250" r="70"  fill="red" />
 //<circle cx="250" cy="250" r="60"  fill="orange" />
 //<circle cx="250" cy="250" r="50"  fill="yellow" />
//<circle cx="250" cy="250" r="40"  fill="green" />
//<circle cx="250" cy="250" r="30"  fill="blue" />
//<circle cx="250" cy="250" r="20"  fill="purple "/>
var svg =d3.select('svg');
var c1=svg.append('circle');
var c2=svg.append('circle');
var c3=svg.append('circle');
var c4=svg.append('circle');
var c5=svg.append('circle');
var c6=svg.append('circle');
 c1.attr('cx',250).attr('cy',250).attr('r',70).attr('fill','red');   
    
  function orange(){
 c2.attr('cx',250).attr('cy',250).attr('r',60).attr('fill','orange'); 

}
function yellow(){
   c3.attr('cx',250).attr('cy',250).attr('r',50).attr('fill','yellow'); 

}
function green(){
     c4.attr('cx',250).attr('cy',250).attr('r',40).attr('fill','green');
}
function blue(){
  c5.attr('cx',250).attr('cy',250).attr('r',30).attr('fill','blue');
}  
function purple(){
  c6.attr('cx',250).attr('cy',250).attr('r',20).attr('fill','purple');
 


