// Função Contrutora
function Produto(nome, preco, desc = 0.5) {
  this.nome = nome;
  this.preco = preco;
  this._desc = desc;

  this.precoFinal = function () {
    return this.preco * (1 - this._desc);
  };
}

// Metodos getters
Produto.prototype.log = function () {
  console.log(`Nome: ${this.nome}, Preço: ${this.preco}`);
};

Object.defineProperty(Produto.prototype, "desc", {
  get: function () {
    return this._desc;
  },
});

Object.defineProperty(Produto.prototype, "descString", {
  get: function () {
    return `O desconto é de ${this._desc * 100}%`;
  },
});

const p1 = new Produto("Geladeira", 3034.48);
const p2 = new Produto("Smartv", 5000.0);
// console.log(p2.nome);
// console.log(p2.preco);
// console.log(p2.precoFinal());

p1.log();
console.log(p1.desc);
console.log(p1.descString);
