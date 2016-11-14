  // <rect x="50" y="38"  rx="2" ry="2" width="300" height="220"
//  style="fill:white;stroke:black;stroke-width:5;opacity:0.5" />
//  <polygon points="100,100 100,200 190,150" style="fill:steelblue;stroke:white;stroke-width:1" />
//<polygon points="100,100 100,115 120,100" style="fill:white;stroke:white;stroke-width:1" />
//<polygon points="100,200 100,185 120,200" style="fill:white;stroke:white;stroke-width:1" />
//<polygon points="112,120 112,180 150,150" style="fill:white;stroke:white;stroke-width:1" />

//  <polygon points="155,150 300,50 300,250" style="fill:steelblue;stroke:white;stroke-width:1" />
// <polygon points="302,48 302,100 268,70" style="fill:white;stroke:white;stroke-width:1" />
// <polygon points="302,252 302,200 268,230" style="fill:white;stroke:white;stroke-width:1" />
// <polygon points="200,150 265,100 265,200" style="fill:white;stroke:white;stroke-width:1" />


var svg =d3.select("svg");
var r=svg.append('rect');
var c4=svg.append('circle');
var c5=svg.append('circle');

var p1=svg.append('polygon');
var p2=svg.append('polygon');
var p3=svg.append('polygon');
var p4=svg.append('polygon');



r.attr('x',25).attr('y',38).attr('rx',20).attr('ry',20).attr('width',450).attr('height',450).attr('fill','white').attr('stroke-width',5).attr('stroke','black').attr('opacity',0.5);

p1.attr('points','215,190 275,215 275,165 ').attr('fill',' OliveDrab').attr('stroke',' OliveDrab').attr('stroke-width',1);
p2.attr('points','250,120 250,260 130,190 ').attr('fill',' DarkSeaGreen').attr('stroke',' SandyBrown').attr('stroke-width',1);

p3.attr('points','227,250 265,275 265,225 ').attr('fill',' DarkOrange').attr('stroke',' DarkOrange').attr('stroke-width',1);
p4.attr('points','240,190 240,310 150,250 ').attr('fill',' #FCB040').attr('stroke',' #FCB040').attr('stroke-width',1);


$('#BOOK').click(function() {
  $("svg").animate({
    opacity: 0.25,
    left: '+=50',
    height: 'toggle'
  }, 5000, function() {
   
  });
});
function orange(){
  var a1 = Math.random()*(200-100)+100;
  var b1 = Math.random()*300;
  var d1 = Math.random()*(20-10)+10;
   c4.attr('cx',b1).attr('cy',a1).attr('r',d1).attr('fill','yellow').attr('stroke',' black'); ; 
  c5.attr('cx',a1).attr('cy',b1).attr('r',d1).attr('fill','purple').attr('stroke',' black'); ;

}  
function purple(){
  var c1=svg.append('circle');
var c2=svg.append('circle');
c1.attr('cx',155).attr('cy',190).attr('r',5).attr('fill','white').attr('stroke',' white'); 
c2.attr('cx',177).attr('cy',250).attr('r',4).attr('fill','white').attr('stroke',' white'); 
}