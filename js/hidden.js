const elementsHidden = document.querySelectorAll(".hidden-animation");

const observer = new IntersectionObserver((e) => {
  e.forEach((element) => {
    if (element.isIntersecting) {
        element.target.classList.add('show-animation')
    }
  });
});

elementsHidden.forEach((e) => {
  observer.observe(e);
});
