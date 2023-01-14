function Calculadora() {
  this.display = document.querySelector('.display');
  
  this.limpaDisplay = function () {
    this.display.value = '0';
  };

  this.mostraContaInvalida = function () {
    this.display.value = 'Conta Inválida';
  };

  this.apagaUltimoValor = function () {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.pegaValorDisplay = function () {
    return this.display.value;
  };

  this.realizaCalculo = function () {
    try {
      const calculo = eval(this.pegaValorDisplay());
      this.display.value = calculo;
    } catch {
      this.mostraContaInvalida();
    }
  };

  this.adicionaAoDisplay = function (valor) {
    if (this.display.value === '0') {
      if (valor === '0') return;
      if (['**', '/', '*', '-', '+', '%', '.'].indexOf(valor) === -1) this.display.value = '';
    }
    if (this.display.value === 'Conta Inválida') this.display.value = '';
    this.display.value += valor;
  };

  this.adicionaFuncionalidadesBotoes = function () {
    document.addEventListener('click', (e) => {
      const elemento = e.target;
      if (elemento.classList.contains('num')) {
        this.adicionaAoDisplay(elemento.innerText);
      } else {
        const id = elemento.id;
        switch (id) {
          case 'c':
            this.limpaDisplay();
            break;
          case 'backspace':
            this.apagaUltimoValor();
            break;
          case 'potenciacao':
            this.adicionaAoDisplay('**');
            break;
          case 'divisao':
            this.adicionaAoDisplay('/');
            break;
          case 'multiplicacao':
            this.adicionaAoDisplay('*');
            break;
          case 'subtracao':
            this.adicionaAoDisplay('-');
            break;
          case 'soma':
            this.adicionaAoDisplay('+');
            break;
          case 'resto':
            this.adicionaAoDisplay('%');
            break;
          case 'ponto':
            this.adicionaAoDisplay('.');
            break;
          case 'igual':
            this.realizaCalculo();
            break;
        }
      }
    });
  };

  this.inicia = function () {
    this.adicionaFuncionalidadesBotoes();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
