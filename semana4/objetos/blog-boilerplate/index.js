let adicionarPost = () => {
  let titulo = document.getElementById("titulo-post");
  let autor = document.getElementById("autor-post");
  let conteudo = document.getElementById("conteudo-post");
  let containerPost = document.getElementById("container-de-posts");
  let imgPost = document.getElementById("imagem-post");

  let dadosFormulario = {
    titulo: titulo,
    autor: autor,
    conteudo: conteudo,
  };

  if (imgPost.value.includes("http")) {
    containerPost.innerHTML += `<img class="img" src=${imgPost.value}>`;
  } else {
    window.alert("Digite um link valido se quiser!");
  }

  containerPost.innerHTML += `<div> <br> ${titulo.value} <br> ${autor.value} <br> ${conteudo.value}</div>`;

  titulo.value = "";
  autor.value = "";
  conteudo.value = "";
  imgPost.value = "";

  let arrayDeDados = [dadosFormulario];
  console.log(arrayDeDados);
};
