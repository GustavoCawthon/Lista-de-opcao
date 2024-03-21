const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const botao = document.querySelector("#botao");
const todasOpcao = [...document.querySelectorAll(".opcao")];

todasOpcao.map((el)=>{
  el.addEventListener("click", (evt)=>{
    const opcao = evt.target;
    opcao.classList.toggle("sele");
  })
})

botao.addEventListener("click", ()=>{
  const opcaoSelecionada = [...document.querySelectorAll(".sele")]
  
  const opcaoNaoSelecionada = [...document.querySelectorAll(".opcao:not(.sele)")]
  
  opcaoSelecionada.map((el)=>{
    caixa2.appendChild(el);
  })
  
  opcaoNaoSelecionada.map((el)=>{
    caixa1.append(el)
   
  })
  
})