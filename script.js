//1.Crie uma condição que exiba uma mensagem no console se a idade for maior que 18//
let idade = 26
if (idade > 18){
console.log ("Você é maior de idade")}


 else if (idade < 18) {console.log ("Você é menor de idade")}
 
 else {
 console.log ("Você pode tirar habilitação")
}

//2.2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true//

let Humano = true

if ( idade < 18 && Humano == true) { console.log ( Humano)}

//3. Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
//
let meuNiver = "Novembro"

if (meuNiver === "Dezembro" || "dezembro" || "Janeiro" || "janeiro") {
    console.log("Nesse mês é meu niver")
}
//4. Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R//

let nome = "Fernanda";
if (nome.substring(0,1)=== "R"){
    console.log ("Nome começa com 'R'")
}else{
    console.log("Nome não começa  com 'R'")
}
//5. Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E//
let sobrenome = "Maximiano"
if(sobrenome.lenght > 6 || nome.substring (0,1) (0,1)=== "E"){
    console.log("Seu nome tem mais de 6 letras e começa com R")
}
