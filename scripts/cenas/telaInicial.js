class TelaInicial {
  constructor() {
  
  }
  
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
    this._rodape();
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0 ,width, height);
  }
  
  _texto() {
    textFont(fonteTelaInicial);
    strokeWeight(5);
    stroke(245, this.opacity);
    textAlign(CENTER);
    fill(0, 76, 156);
    textSize(50);
    text('As Aventuras de', width / 2, height / 3);
    textSize(90);
    text('Hipsta', width / 2, height / 5 * 3);
  }
  
  _botao() {
    botaoGerenciador.draw();
    botaoGerenciador.y = height / 7 * 5
  }
  
  _rodape() {
    textFont(fonteTelaInicial);   
    fill(255);
    strokeWeight(0);
    textAlign(RIGHT);
    textSize(20);
    text('created by eder goncalves', width -10, height);
  }
}