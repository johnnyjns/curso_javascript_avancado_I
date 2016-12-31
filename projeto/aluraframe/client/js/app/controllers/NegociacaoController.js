class NegociacaoController {

  constructor(){

    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event){

    event.preventDefault();

    let helper = new DateHelper();

    let negociacao = new Negociacao(
      helper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao, negociacao.data);
    console.log(helper.dataParaTexto(negociacao.data));

    // this._inputData.value = 0;
    // this._inputQuantidade.value = 0;
    // this._inputValor.value = 0.0;

  }

}
