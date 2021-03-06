function validaCodigo(codigo) {

    // cria a expressão regular. Poderíamos ter usado
    // a sintaxe new RegExp(/\D{3}-\D{2}-\d{2}/)
    // \D é qualquer coisa não dígito, \D{3} é qualquer coisa não dígito que forme um grupo de 3 caracteres. E \d é qualquer dígito.
    let expressao = /\D{3}-\D{2}-\d{2}/;

    // toda expressão regular possui o método test
    // que recebe o alvo do teste, retornando true
    // se passou, e false se falhou
    if(expressao.test(codigo)) {
          console.log('Código válido!');
      } else {
          console.log('Código inválido');
      }

      validaCodigo('GWZ-JJ-12'); // válido
      validaCodigo('1X1-JJ-12'); // inválido
}
// console.log();
