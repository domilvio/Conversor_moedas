function converterMoeda(){
    let valor = document.querySelector("input").value;
    let moeda = document.querySelector("#moeda");
    let resultado = document.querySelector("p");
    let coin = document.querySelector("#coin");
   
    if(moeda.value=="euro"){
        resultado.innerHTML=valor + " kz equivale a " + valor * 0.0010 + "€";
        coin.innerHTML=valor + " € equivale a " + valor * 0.0010 + "kz";
    }
   else if(moeda.value=="dolar"){
        resultado.innerHTML=valor + " kz equivale a " + valor * 0.0011 + "$";
       coin.innerHTML=valor + " $ equivale a " + valor * 0.0011 + "kz";
   
    }
   else if(moeda.value=="libra"){
        resultado.innerHTML=valor + " kz equivale a " + valor * 0.00085 + "£";
       coin.innerHTML=valor + " £ equivale a " + valor * 0.00085 + "kz";
   
    }
    else if(moeda.value=="metical"){
        resultado.innerHTML=valor + " kz equivale a " + valor * 0.070 + "MT";
        coin.innerHTML=valor + " MT equivale a " + valor * 0.070 + "kz";
   
    }
    }

