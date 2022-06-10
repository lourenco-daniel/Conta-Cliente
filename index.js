

class Cliente {
    nome;
    cpf;
    rg;
    
}

class ContaCorrente {
    agencia;
    numeroConta;
    // #saldo = 0; 
    // proposta de classe privada; https://github.com/tc39/proposal-class-fields#private-fields 
    _saldo = 0;

    sacar(valorSaque) {
        if(this._saldo<valorSaque) {
            console.log("saldo insuficiente");
        }else{
            console.log("Saldo: ");
            this._saldo -= valorSaque;
            
        }
    }

    depositar(valor){
        if(valor > 0) {
            this._saldo += valor;
            
        }
        
    }
}


const cliente1 = new Cliente();

cliente1.nome = "Lourenço";
cliente1.cpf = 22233344408;
cliente1.rg = 5666222;


const contaCorrenteLourenco = new ContaCorrente();

contaCorrenteLourenco.agencia = 1001;
contaCorrenteLourenco.numeroConta = 751666-8;
console.log(cliente1, contaCorrenteLourenco);

contaCorrenteLourenco.depositar(500);
contaCorrenteLourenco.depositar(200);

console.log(contaCorrenteLourenco._saldo);

contaCorrenteLourenco.sacar(300);

console.log(contaCorrenteLourenco._saldo);





