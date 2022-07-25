
let mensaje = ("completa los requisitos");

function convertir(){
    let valore = parseInt(document.getElementById("valor").value);   
    let resultado = 0;
    let dolar = 4400;
    let euro = 4800;
              
   
    
    if(document.getElementById("uno").checked){
        resultado = valore * dolar;
        return alert(valore + " Dolares equivalen a: $ " + resultado + " Pesos");
        
      
    }else  
    if (document.getElementById("dos").checked){
        resultado = valore * euro;
        return alert(valore + " Euros equivalen a: $ " + resultado + " Pesos");
    }else 
    if (valore = " "){
        alert(mensaje); 
    }
        
        

}  

