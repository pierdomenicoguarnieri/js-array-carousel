const images = [
  "assets/img/01.webp",
  "assets/img/02.webp",
  "assets/img/03.webp",
  "assets/img/04.webp",
  "assets/img/05.webp"
];

const imgContainer = document.querySelector(".pg-img-container");

const btnNext = document.querySelector(".next");

const btnPrev = document.querySelector(".prev");

for(let i = 0; i < images.length; i++){
  let image = images[i];
  imgContainer.innerHTML +=`
  <img src="${image}" class="imgCarousel" alt="">
  `
}

const imgCollection = document.querySelectorAll(".imgCarousel");

imgCollection[0].classList.add("show");

let i = 0;

btnPrev.classList.add("hide");

btnNext.addEventListener("click", function(){
  i++;

  if(i == 0){
    btnPrev.classList.add("hide");
  }else{
    btnPrev.classList.remove("hide");
  }

  if(i == ((imgCollection.length) - 1)){
    btnNext.classList.add("hide");
  }else{
    btnNext.classList.remove("hide");
  }

  imgCollection[i].classList.add("show");
  imgCollection[i - 1].classList.remove("show");
})

btnPrev.addEventListener("click", function(){
  i--;

  if(i == 0){
    btnPrev.classList.add("hide");
  }else{
    btnPrev.classList.remove("hide");
  }

  if(i == ((imgCollection.length) - 1)){
    btnNext.classList.add("hide");
  }else{
    btnNext.classList.remove("hide");
  }

  imgCollection[i].classList.add("show");
  imgCollection[i + 1].classList.remove("show");
})