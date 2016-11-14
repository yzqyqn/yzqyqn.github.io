
function move(){
       // var svgctrl = d3.select('svg');

var x= $('#x').val();
var y= $('#y').val();
var svg =d3.select('svg');
var r=svg.append('rect');
var p1 = svg.append('polygon');
var p2 = svg.append('polygon');
var p3 = svg.append('polygon');
var p4 = svg.append('polygon');
var p5 = svg.append('polygon');
var p6 = svg.append('polygon');
var p7 = svg.append('polygon');
var p8 = svg.append('polygon');

r.attr('x',x).attr('y',y).attr('rx',2).attr('ry',2).attr('width',300).attr('height',220).attr('fill','white').attr('stroke-width',5).attr('stroke','black').attr('opacity',0.5);
p1.attr('points',x+50+','+y+62+' '+x+50+','+y+162+' '+x+140+','+y+112).attr('fill','steelblue').attr('stroke','white').attr('stroke-width',1);
p2.attr('points',x+50+','+y+62+' '+x+50+','+y+77+' '+x+70+','+y+62).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p3.attr('points',x+50+','+y+162+' '+x+50+','+y+147+' '+x+70+','+y+162).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p4.attr('points',x+62+','+y+82+' '+x+62+','+y+142+' '+x+100+','+y+112).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p5.attr('points',x+105+','+y+112+' '+x+250+','+y+12+' '+x+250+','+y+212).attr('fill','steelblue').attr('stroke','steelblue').attr('stroke-width',1);
p6.attr('points',x+252+','+y+10+' '+x+252+','+y+62+' '+x+218+','+y+32).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p7.attr('points',x+252+','+y+214+' '+x+252+','+y+162+' '+x+218+','+y+192).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p8.attr('points',x+150+','+y+112+' '+x+215+','+y+62+' '+x+215+','+y+162).attr('fill','white').attr('stroke','white').attr('stroke-width',1);

}
$('#test').bind('click',move)

p4.on("click",function(){
          d3.select(this)
                .attr("fill","wheat");
        });
p8.on("click",function(){
          d3.select(this)
                .attr("fill","wheat");
        });