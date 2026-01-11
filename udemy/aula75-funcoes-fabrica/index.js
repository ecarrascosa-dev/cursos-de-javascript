function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.nome = valor.join();
            console.log(valor);
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Eduardo', "Carrascosa", 1.72, 60);
p1.nomeCompleto = 'Eduardo Carrascosa Pintor'
console.log(p1.nome)