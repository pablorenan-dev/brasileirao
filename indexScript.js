setTimeout(function traduzirSiglasWDL() {
  let todasSiglas = document.querySelectorAll(".wg_width_90");
  console.log(todasSiglas.length, "tamanho");
  console.log(todasSiglas, "tudo");
  let sigla = todasSiglas[3].children;
  console.log(sigla[0].innerHTML);
}, 2000); // 2000 milissegundos = 2 segundos
