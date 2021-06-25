const cep = document.querySelector('#cep');
const mostrarDados = (result) =>{
  for(const campo in result){
    if(document.querySelector("#"+campo)){
      document.querySelector("#"+campo).value = result[campo];
    };
  };
};

cep.addEventListener("blur", (e)=>{
  let pesquisaLimpa = cep.value.replace("-","");
  const opcoes = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }
  fetch(`https://viacep.com.br/ws/${pesquisaLimpa}/json`, opcoes)
  .then(response => {
    response.json().then( dados => mostrarDados(dados))
  }).catch(e => console.log("Deu erro: " + e.message))
  
})