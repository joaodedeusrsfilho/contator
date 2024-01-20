function contar(){
    let inicio = Number(document.querySelector('#inputInicio').value)

    let fim = Number(document.querySelector('#inputFim').value)

    let passo = Number(document.querySelector('#inputPasso').value)

    let divResultado = document.querySelector('#divResultado')

    if(inicio == 0 || fim == 0 || passo == 0){
       
        divResultado.innerHTML = `Impossivel contar`
    }else{

        if(inicio < fim){
        for(let x = inicio ; x <= fim; x+=passo){
                divResultado.innerHTML += ` ${x} \u{1F91E}` //formatação unico (\u{codigo do unicode})
            }
        }else if(inicio > fim){
            for(let y = inicio; y >= fim; y-=passo){
                divResultado.innerHTML += ` ${y} \u{1F91E}`
            }
        }

        
    }
    
    
}