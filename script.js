function converterMoeda(){
    let valor = document.querySelector("input").value;
    let moeda = document.querySelector("#moeda");
    let resultado = document.querySelector("p");
    if(moeda.value=="euro"){
        resultado.innerHTML=valor + " kz equivale a " + valor * 0.0010 + "€";
    }
   else if(moeda.value=="dolar"){
        resultado.innerHTML=valor + " kz equivale a " + valor * 0.0011 + "$";
    }
   else if(moeda.value=="libra"){
        resultado.innerHTML=valor + " kz equivale a " + valor * 0.00085 + "£";
    }
    else if(moeda.value=="metical"){
        resultado.innerHTML=valor + " kz equivale a " + valor * 0.070 + "MT";
    }
    }

