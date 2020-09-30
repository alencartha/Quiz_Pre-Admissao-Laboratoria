//pergunta o nome da pessoa
let name = prompt("Bem- vindo(a)! Este é um quiz sobre um tema muito relevante nos tempos atuais, o COVID 19! \nMas primeiro queremos saber, qual é seu nome?");



//perguntar se usuário quer continuar

let questionContinue = prompt ("Você deseja iniciar o game? \n 1.Sim \n 2.Não");



//condição sim, se o usuário desejar continuar:

if ( questionContinue == 1) {

    
    
    // primeira questão sobre o Covid19
        let firtsQuestion = prompt (" Atenção: responda apenas com os números corretos!!! \n \nO que é Covid19? \n 1. É uma doença infecciosa causada por um coronavírus recém-descoberto. \n 2. Só uma gripezinha");
    

        if (firtsQuestion == 1){

            document.getElementById("correta1").innerHTML = "Questão 1 correta"

         } 
        
         else {
            document.getElementById("incorreta1").innerHTML = "Questão 1 incorreta"
         }

    
    
    //segunda questão sobre o Covid19
        let secondQuestion = prompt ("Quais os sintomas da Covid19? \n 1. Perda do olfato, dor na garganta e coceira. \n 2. Febre, dor na garganta, coriza e tosse. \n 3. Dor de cabeça, depressão e lesões na pele. ");
    
        if (secondQuestion == 2){

        document.getElementById("correta2").innerHTML = "Questão 2 correta"

         } 
     
        else {
        document.getElementById("incorreta2").innerHTML = "Questão 2 incorreta"
         }


        
    //terceira questão sobre o Covid19
        let thirdQuestion = prompt ("Responda se esta afirmação é verdadeira ou falsa: Podemos substituir Alcool Gel por Gel Fixador de Cabelo?  \n 1. Verdadeiro. \n 2. Falso.");
    
        if (thirdQuestion == 2){

        document.getElementById("correta3").innerHTML = "Questão 3 correta"

         } 

        else {
        document.getElementById("incorreta3").innerHTML = "Questão 3 incorreta"
         }


    
} 

else { 
    document.write("Obrigado! Esperamos você em uma próxima oportunidade!")
     }

     document.getElementById ("ola").innerHTML = "Olá, " + name + " ! Confira quantas questões você acertou:"

     document.getElementById ("respostascertas").innerHTML = "Respostas certas:"

     document.getElementById ("respostaserradas").innerHTML = "Respostas incorretas:"









