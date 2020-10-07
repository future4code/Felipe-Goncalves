let adicionarPost = () => {
  let titulo = document.getElementById("titulo-post");
  let autor = document.getElementById("autor-post");
  let conteudo = document.getElementById("conteudo-post");
  let containerPost = document.getElementById("container-de-posts");

  let dadosFormulario = {
    titulo: titulo,
    autor: autor,
    conteudo: conteudo,
  };

  let arrayDeDados = [dadosFormulario];
  console.log(arrayDeDados);

  containerPost.innerHTML += `<div> <br> ${titulo.value} <br> ${autor.value} <br> ${conteudo.value}</div>`;

  titulo.value = "";
  autor.value = "";
  conteudo.value = "";
};
