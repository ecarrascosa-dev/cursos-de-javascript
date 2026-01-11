function Pessoa(nome, sobrenome) {

    const ID = 2;
    const metodoInterno = function() {

    };

    this.nome =  nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ": Sou um método");
    };
}

const p1 = new Pessoa('eduardo', 'carrascosa');
const p2 = new Pessoa('Fagulari', "fanatine");
console.log(p2.metodo());