function converterMoeda(){
    let valor = document.querySelector("input").value;
    let moeda = document.querySelector("#moeda");
    let mostrar = document.querySelector("p");
    let coin = document.querySelector("#coin");
   
    if(moeda.value=="euro"){
        valor=valor.replace(/\./g,"").replace(",",".");
        resultado1=valor * 0.0010;
        resultado2=valor / 0.0010;
        mostrar.innerHTML=valor + " kz equivale a " + parseFloat(resultado1.toPrecision(4)) + "€";
        coin.innerHTML=parseFloat(valor) + " € equivale a " + parseFloat(resultado2.toPrecision(4)) + "kz";
    }
   else if(moeda.value=="dolar"){
       valor=valor.replace(/\./g,"").replace(",",".");
       resultado1=valor * 0.0011;
       resultado2=valor / 0.0011;
       mostrar.innerHTML=valor + " kz equivale a " + parseFloat(resultado1.toPrecision(4)) + "$";
       coin.innerHTML=parseFloat(valor) + " $ equivale a " + parseFloat(resultado2.toPrecision(4)) + "kz";
   
    }
    else if(moeda.value=="real"){
       valor=valor.replace(/\./g,"").replace(",",".");
        resultado1=valor * 0.0062;
        resultado2=valor / 0.0062;
        mostrar.innerHTML=valor + " kz equivale a " + parseFloat(resultado1.toPrecision(4))  + "R$";
       coin.innerHTML=parseFloat(valor) + " R$ equivale a " + parseFloat(resultado2.toPrecision(4)) + "kz";
   
    }
   else if(moeda.value=="libra"){
       valor=valor.replace(/\./g,"").replace(",",".");
        resultado1=valor * 0.00085;
        resultado2=valor / 0.00085;
        mostrar.innerHTML=valor + " kz equivale a " + parseFloat(resultado1.toPrecision(4))  + "£";
       coin.innerHTML=parseFloat(valor) + " £ equivale a " + parseFloat(resultado2.toPrecision(4)) + "kz";
   
    }
    else if(moeda.value=="metical"){
        valor=valor.replace(/\./g,"").replace(",",".");
        resultado1=valor * 0.070;
        resultado2=valor / 0.070;
        mostrar.innerHTML=valor + " kz equivale a " + parseFloat(resultado1.toPrecision(4)) + "MT";
        coin.innerHTML=parseFloat(valor) + " MT equivale a " + parseFloat(resultado2.toPrecision(4)) + "kz";
   
    }
    }

