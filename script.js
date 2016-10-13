function callbackPromedio (a,b,c, callback){
     
     var suma= a+b+c;

     var promedio= suma / 3;

	return callback(promedio);
}






var segundero;

function segundero(){
   var segundero=1;

   setInterval(function(){

   document.getElementById("titulo").innerHTML=segundero++;
    }

    ,1000,"JavaScript");
}




