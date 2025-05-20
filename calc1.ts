// tudo dentro de função

let teclado = require (`prompt-sync`)();
let n1: number = 0;
let n2: number = 0;
let opcao: string = ``;

function sair(): void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);     
}

function opcoes (opcao:string): void{
    switch (opcao){
        case '+': console.log(soma()); break;
        case '-':  console.log(subtracao()); break;
        case '*': console.log(multiplicacao()); break;
        case '/': console.log(divisao()); break;
        case '0': console.log(sair()); break;
        default: break;
    }    
}

function menu():void{
    let teclado = require (`prompt-sync`)();
    let opcao: string = ``;
    console.log(`---* CALCULADORA *---`);
    console.log(`Digite `);
    console.log(`+ --> ADIÇÃO`);
    console.log(`- --> SUBTRAÇÃO`);
    console.log(`* --> MULTIPLICAÇÃO`);
    console.log(`/ --> DIVISÃO`);
    console.log(`0 --> SAIR`);
    opcao = teclado(`Digite a sua opção: `);
    opcoes(opcao);

}


function soma (): number{
    let teclado = require (`prompt-sync`)();
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));
    let resultado: number = (n1 + n2);
    return resultado;
}

function subtracao (): number{
    let teclado = require (`prompt-sync`)();
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));
    let resultado: number = (n1 - n2);
    return resultado
}

function multiplicacao (): number{
    let teclado = require (`prompt-sync`)();
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));
    let resultado: number = (n1 * n2);
    return resultado;
}

function divisao (): number{
    let teclado = require (`prompt-sync`)();
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));
    let resultado: number = (n1 / n2);
    return resultado;
}

while(true){
menu();

}

