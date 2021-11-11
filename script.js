// 1 Checkpoint de Programação Imperativa!

let pipoca = 10
let macarrão = 8
let carne =  15 
let feijão =  12 
let brigadeiro = 8



function microondas(tempo, prato){

    if(tempo>=prato && tempo<=prato*2){
        console.log("Pranto pronto");
       }

else if(tempo<prato){
            console.log("inexistente");
       }
       
else if(tempo>=prato*2 && tempo<prato*3){
           
console.log("O Prato queimou");

        }
else if(tempo>prato*3){
            console.log("kabumm");
       }
else {
            console.log("prato Inexistente");
        }
}
microondas(50, pipoca)