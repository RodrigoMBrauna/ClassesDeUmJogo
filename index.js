class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "realizou um ataque indefinido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const mago = new heroi("Gandalf", 1000, "mago");
const guerreiro = new heroi("Arthur", 30, "guerreiro");
const monge = new heroi("Shaolin", 40, "monge");
const ninja = new heroi("Naruto", 20, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
