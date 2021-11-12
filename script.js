// Programação Imperativa!
// Primeiro Checkpoint - Turma 2
// Ricardo Freitas

let pipoca = 10
let macarrão = 8
let carne =  15 
let feijão =  12 
let brigadeiro = 8



function microondas(tempo, pratoEscolhido){

    if(tempo>=pratoEscolhido && tempo<=pratoEscolhido*2){
        console.log("Prato pronto, bom apetite!!!");
       }

else if(tempo<pratoEscolhido){
            console.log("Tempo Insuficiente," + " " + "Prato pronto, bom apetite!!!");
       }
       
else if(tempo>=pratoEscolhido*2 && tempo<pratoEscolhido*3){
           
console.log("A Comida queimou," + " " + "Prato pronto, bom apetite!!!" );

        }
else if(tempo>pratoEscolhido*3){
            console.log("kabumm," + " " + "Prato pronto, bom apetite!!!");
       }
else {
            console.log("prato Inexistente" + "/n Prato pronto, bom apetite!!!");
        }
}
microondas(9, pipoca)
microondas(10, pipoca)
microondas(21, pipoca)
microondas(31, pipoca)
