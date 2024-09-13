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

setTimeout(function traduzirSiglasColunas() {
  let todasSiglas = document.querySelectorAll(".wg_header");

  for (let i = 0; i < todasSiglas.length; i++) {
    let ConteudoSiglaColuna = todasSiglas[i].innerHTML;
    console.log(ConteudoSiglaColuna);
    switch (ConteudoSiglaColuna) {
      case "MP":
        todasSiglas[i].innerHTML = "PARTIDAS";
        break;

      case "W":
        todasSiglas[i].innerHTML = "V";
        break;

      case "D":
        todasSiglas[i].innerHTML = "E";
        break;

      case "L":
        todasSiglas[i].innerHTML = "D";
        break;

      case `<img class="wg_flag" src="https://media.api-sports.io/flags/br.svg" loading="lazy" onerror="this.style.display=&quot;none&quot;"> Brazil: Serie A`:
        todasSiglas[
          i
        ].innerHTML = `<img class="wg_flag" src="https://media.api-sports.io/flags/br.svg" loading="lazy" onerror="this.style.display=&quot;none&quot;"> Brasileirão`;
        break;
    }
  }
}, 2000); // 2000 milissegundos = 2 segundos

setTimeout(function adicionarBordasNosTimesClassificacao() {
  let todosTrs = document.querySelectorAll("tr");

  for (let i = 2; i < todosTrs.length; i++) {
    // todosTrs[i].style.borderLeft = "2px solid black";
    if (i < 6) {
      todosTrs[i].style.borderLeft = "2px solid blue";
    } else if (i > 5 && i < 8) {
      todosTrs[i].style.borderLeft = "2px solid orange";
    } else if (i > 7 && i < 14) {
      todosTrs[i].style.borderLeft = "2px solid green";
    } else if (i > 11 && i < 21) {
      todosTrs[i].style.borderLeft = "2px solid red";
    }
  }
}, 2000);
