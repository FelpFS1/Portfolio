function showGif(e) {
  e.addEventListener("click", (e) => {
    
    const className = e.currentTarget.className;
    const div = e.currentTarget.parentNode;
    const dados = div.cloneNode(true);
    const classItem = [
      {
        0: { name: "image1", class: "show-gif" },
      },
      {
        1: { name: "image2", class: "show-gif-react-project" },
      },
      
    ];
    classItem.forEach((item, i) => {
      if (className.includes(item[i].name)) {
        div.classList.add(item[i].class);
        div.innerHTML = ""
        createButton(item,i,div,dados);
      }
      
    });
  });
}

document.querySelectorAll(".project-img-wrapper").forEach((e) => {
  showGif(e);
});


function createButton(item, i, div, data) {
    const button = document.createElement("button");
    button.id = "cancel-gif";
    button.textContent = "X";
    div.appendChild(button);
  
    button.addEventListener('click', function cancelGif() {
      div.classList.remove(item[i].class);
      div.parentNode.replaceChild(data, div);
  
     
      document.querySelectorAll(".project-img-wrapper").forEach((e) => {
        showGif(e);
      });
      
    });
  }