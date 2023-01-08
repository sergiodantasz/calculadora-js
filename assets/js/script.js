function criaCalculadora() {
  const calculadora = {
    display: document.querySelector('.display'),

    adicionaAoDisplay(valor) {
      if (this.display.value === '0') {
        if (valor === '0') return
        const operacoes = ['**', '/', '*', '-', '+', '%', '.']
        if (operacoes.indexOf(valor) === -1) this.display.value = ''
      } else if (this.display.value === 'Conta Inválida') {
        this.display.value = ''
      }
      this.display.value += valor
    },

    realizaCalculo() {
      try {
        const calculo = eval(this.display.value)
        this.display.value = calculo
      } catch {
        this.mostraContaInvalida()
      }
    },

    setaFuncionalidadesBotoes() {
      document.addEventListener('click', e => {
        const elemento = e.target
        if (elemento.classList.contains('num')) {
          this.adicionaAoDisplay(elemento.innerText)
        } else {
          const id = elemento.id
          switch (id) {
            case 'c':
              this.limpaDisplay()
              break
            case 'backspace':
              this.apagaUltimoValor()
              break
            case 'potenciacao':
              this.adicionaAoDisplay('**')
              break
            case 'divisao':
              this.adicionaAoDisplay('/')
              break
            case 'multiplicacao':
              this.adicionaAoDisplay('*')
              break
            case 'subtracao':
              this.adicionaAoDisplay('-')
              break
            case 'soma':
              this.adicionaAoDisplay('+')
              break
            case 'resto':
              this.adicionaAoDisplay('%')
              break
            case 'ponto':
              this.adicionaAoDisplay('.')
              break
            case 'igual':
              this.realizaCalculo()
              break
          }
        }
      })
    },

    limpaDisplay() {
      this.display.value = '0'
    },

    mostraContaInvalida() {
      this.display.value = 'Conta Inválida'
    },

    apagaUltimoValor() {
      if (this.display.value === '0') return
      this.display.value = this.display.value.slice(0, -1)
    },
  }
  return calculadora
}

const calculadora = criaCalculadora()
calculadora.setaFuncionalidadesBotoes()
