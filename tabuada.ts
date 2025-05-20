let teclado = require (`prompt-sync`)();

function sair(): void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);  
}
function tabuada() : void{
let tab : number = parseInt(teclado(`digite a tabuada: `))
let cont : number = 0;
while(cont <= 10){
console.log(`${tab} X ${cont} = ${tab * cont}`);
cont++;
}
}

function pergunta() : void{
    console.log(`deseja sair?(digite S para sim e N para não)`)
    let escolha : string = (teclado(``))
    
    if (escolha == `S`|| escolha ==`s`){
    sair()
    }
}

do{
    console.log (tabuada())
    console.log (pergunta())
    console.clear()
}while(true)