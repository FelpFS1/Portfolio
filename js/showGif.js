document.querySelectorAll(".project-img-wrapper").forEach((e) => {
    e.addEventListener("click", (e) => {
      const className = e.currentTarget.className
      if(className.includes('image1')){
          const pai = e.currentTarget.parentNode
      const dados = pai.innerHTML
       console.log(dados);
       pai.classList.add('show-gif')
       pai.innerHTML = ""
      }else{
          console.log("nao e a img 1");
      }
       
      });
  })
  