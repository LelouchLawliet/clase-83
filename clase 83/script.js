
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=5;
var ancho = canvas.width;
 var nuevo_ancho = canvas.width - 70; 
 var nueva_altura = canvas.height - 300;
  if(ancho < 992) { document.getElementById("canvas").width = nuevo_ancho; 
 document.getElementById("canvas").height = nueva_altura; 
 document.body.style.overflow = "hidden"; }
canvas.addEventListener("touchstart", my_touchstart);
 function my_touchstart(e)
 { color = document.getElementById("color").value;
width_of_line=document.getElementById("width").value;
last_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
last_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
}
 canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e)
 {

        actual_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        actual_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
 
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;

  console.log("La última posición de las coordenadas x, y = ");
  console.log("x = " + last_position_of_x + "y = " 
       + last_position_of_y);
  ctx.moveTo(last_position_of_x, last_position_of_y);

  console.log("Posición actual de las coordenadas x, y = ");
  console.log("x  = " + actual_position_of_mouse_x + "y = " 
          + actual_position_of_mouse_y);
  ctx.lineTo(actual_position_of_mouse_x, 
          actual_position_of_mouse_y);
  ctx.stroke();
  
  last_position_of_x = actual_position_of_mouse_x; 
  last_position_of_y = actual_position_of_mouse_y; 
}
function clear()
{ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);}