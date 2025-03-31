function converterMoeda(){
    var moeda = document.querySelector("input").value;
    var euro = 0.0010;
    document.querySelector("p").innerHTML=moeda + " kz equivale a " + moeda * euro + " €";
    document.querySelector("p").style.textAlign = "center";
}

