
//pergunta o nome da pessoa
let name = prompt("Bem- vindo(a)! Este é um quiz sobre um tema muito relevante nos tempos atuais, a COVID 19! \n\nMas primeiro queremos saber, qual é seu nome?");


//perguntar se usuário quer continuar

let questionContinue = prompt ("Você deseja iniciar o game? \n\n 1.Sim \n 2.Não");

//caso a pessoa responda que não quer continuar o game
if(questionContinue == 2) { 
    document.getElementById("mensagem-cancel").innerHTML = "Ah, que pena! Esperamos você em uma próxima! :)"

}
else if( questionContinue == 1) {

    let firtsQuestion = prompt (" Atenção: responda apenas com os números corretos!!! \n \nO que é Covid19? \n\n 1. É uma doença infecciosa causada por um coronavírus recém-descoberto. \n 2. Só uma gripezinha");
    
    if (firtsQuestion == 1){
        document.getElementById("correta1").innerHTML = "Questão 1 correta"
    } 
        
    else {
        document.getElementById("incorreta1").innerHTML = "Questão 1 incorreta"
    };

    
   
    let secondQuestion = prompt ("Quais os sintomas da Covid19? \n\n 1. Perda do olfato, dor na garganta e coceira. \n 2. Febre, dor na garganta, coriza e tosse. \n 3. Dor de cabeça, depressão e lesões na pele. ");
    
    if (secondQuestion == 2){
        document.getElementById("correta2").innerHTML = "Questão 2 correta"
    } 
     
    else {
        document.getElementById("incorreta2").innerHTML = "Questão 2 incorreta"
    }

  
    let thirdQuestion = prompt ("Responda se esta afirmação é verdadeira ou falsa: Podemos substituir Alcool Gel por Gel Fixador de Cabelo?  \n\n 1. Verdadeiro. \n 2. Falso.");
    
    if (thirdQuestion == 2){
        document.getElementById("correta3").innerHTML = "Questão 3 correta"

            
        //mensagem final para o usuário, concatenando o nome armazenado com o prompt
        document.getElementById ("mensagem-para-usuario").innerHTML = "Olá, " + name + " ! Confira quais perguntas você acertou a resposta:"
    } 

    else {
        document.getElementById("incorreta3").innerHTML = "Questão 3 incorreta";

        //mensagem final para o usuário, concatenando o nome armazenado com o prompt
        document.getElementById ("mensagem-para-usuario").innerHTML = "Olá, " + name + " ! Confira quais perguntas você acertou a resposta:"
    }   
} 








