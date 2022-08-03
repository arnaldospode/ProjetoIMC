function calcular() {
    const peso = document.getElementById("peso").value; /*Criei uma variavel e busquei pelo identificador */
    const altura = document.getElementById("altura").value; /*.value serve para que minha variavel pegue todo valor digitado no meu campo input*/
    const texto = document.getElementById("resultado");

    const resultado = (peso / (altura * altura)); 
    const resultado_final = resultado.toFixed(1);

    if(resultado_final <= 18.5) { /*criei uma condiçao falando que se meu valor for igual ou mneo que 18 entao ele exibe a mensagem em tela , la pelo p, falando se esta acima ou normal no peso*/
       return texto.innerHTML = "Abaixo do peso normal: " + resultado_final;
    }
    if(resultado_final >= 18.5 && resultado_final <= 24.9) { /*Quando quero botar mais que uma condiçao if acrecento o if Else podendo assim botar mais que uma condiçao*/
       return texto.innerHTML = "Peso Ideal: " + resultado_final;
    }
    if(resultado_final >= 25.0 && resultado_final <= 29.9) {
       return texto.innerHTML = "Execesso de Peso: " + resultado_final;
    }
    if(resultado_final >= 30.0 && resultado_final <= 34.9) {
       return texto.innerHTML = "Obesidade 1: " + resultado_final;
    }
    if(resultado_final >= 35.0 && resultado_final <= 39.9) {
       return texto.innerHTML = "Obesidade 2: " + resultado_final;
    }
    if(resultado_final >= 40.0) {
       return texto.innerHTML = "Obesidade 3: " + resultado_final;
    } 
}