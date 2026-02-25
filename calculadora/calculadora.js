function calculadora(){
    while(true){
        let resultado = 0.0;
        let operando1;
        let operando2;
        let operandor;

        operando1 = prompt("Digite o primeiro número: ");
        operando2 = prompt("Digite o segundo número: ");
        operador = prompt("Digite uma das operações (+ - * / ): ");

        if ( operador === "+"){
            resultado = operando1 + operando2;
        } else if ( operador === "-" ){
            resultado = operando1 - operando2
        } else if ( operador === "*" ){
            resultado = operando1 * operando2
        } else if ( operador === "/" ){
            if (operando2== 0){
                alert("Não é possível dividir por zero")
                return
            }
            resultado = operando1 / operando2
        } else {
            alert ("operador inválido!");
            return
        }


        alert("Resultado: " + 
            operando1 + " " + operador + " " + operando2 + " = " + resultado);
    }
}    