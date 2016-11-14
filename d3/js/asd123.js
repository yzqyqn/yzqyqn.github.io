
var svg =d3.select('svg');
var r=svg.append('rect');
var c4=svg.append('circle');
var c5=svg.append('circle');
var c1=svg.append('circle');
var c2=svg.append('circle');
var p1=svg.append('polygon');
var p2=svg.append('polygon');
var p3=svg.append('circle');
var p4=svg.append('circle');

  r.attr('x',25).attr('y',38).attr('rx',20).attr('ry',20).attr('width',450).attr('height',450).attr('fill','white').attr('stroke-width',5).attr('stroke','black').attr('opacity',0.5);
p1.attr('points','215,190 275,215 275,165 ').attr('fill',' OliveDrab').attr('stroke',' OliveDrab').attr('stroke-width',1);
p2.attr('points','250,120 250,260 130,190 ').attr('fill',' DarkSeaGreen').attr('stroke',' SandyBrown').attr('stroke-width',1);

p3.attr('points','227,250 265,275 265,225 ').attr('fill',' DarkOrange').attr('stroke',' DarkOrange').attr('stroke-width',1);
p4.attr('points','240,190 240,310 150,250 ').attr('fill',' #FCB040;').attr('stroke',' #FCB040').attr('stroke-width',1);
   c1.attr('cx',155).attr('cy',190).attr('r',5).attr('fill','white').attr('stroke',' white'); 
  c2.attr('cx',177).attr('cy',250).attr('r',4).attr('fill','white').attr('stroke',' white'); 
  

