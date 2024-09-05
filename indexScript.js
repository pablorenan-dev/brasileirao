setTimeout(function traduzirSiglasWDL() {
  let todasSiglas = document.querySelectorAll(".wg_width_90");
  console.log(todasSiglas.length, "tamanho");
  console.log(todasSiglas, "tudo");
  let sigla = todasSiglas[3].children;
  console.log(sigla[0].innerHTML);

  for (let i = 0; i < todasSiglas.length; i++) {
    let siglasChildren = todasSiglas[i].children;

    for (let j = 0; j < siglasChildren.length; j++) {
      let siglaChildConteudo = siglasChildren[j].innerHTML;

      switch (siglaChildConteudo) {
        case "W":
          siglasChildren[j].innerHTML = "V";
          break;

        case "L":
          siglasChildren[j].innerHTML = "X";
          break;

        case "D":
          siglasChildren[j].innerHTML = "E";
          break;
      }
    }
  }
}, 2000); // 2000 milissegundos = 2 segundos
