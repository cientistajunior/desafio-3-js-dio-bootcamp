/*O enunciado pediu idade também, porém não foi necessario utilizar.*/

class heroi {
  constructor(nome) {
    this.nome = nome;
  }

  mensagemFinal() {
    console.log(`O ${this.nome} atacou usando ${tipoJogo.tipo(this.nome)}`);
  }

  tipo(t) {
    if (t === "mago") {
      return "magia";
    } else if (t === "guerreiro") {
      return "espada";
    } else if (t === "monge") {
      return "artes marciais";
    } else if (t === "ninja") {
      return "shuriken";
    }
    return t;
  }
}

let tipoJogo = new heroi("mago");
let tipoJogo2 = new heroi("guerreiro");
let tipoJogo3 = new heroi("monge");
let tipoJogo4 = new heroi("ninja");

tipoJogo.mensagemFinal();
tipoJogo2.mensagemFinal();
tipoJogo3.mensagemFinal();
tipoJogo4.mensagemFinal();
