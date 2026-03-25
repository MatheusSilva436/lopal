function meuSwitch(){

    let dia;
    let Data = new Date().getDay();

    switch(Data) {
        case 0:
            dia = "Domingo";
            break;
        case 2:
        case 3:  
        case 4:
            dia = "o meio da semana";
            break;    
        case 6:
            dia = "Sábado";
            break
        default:
            dia = "segunda ou sexta"
    }

    document.getElementById("demo").innerHTML = "Hoje é " + dia;
}