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

for(let j = 1; j < imgCollection.length; j++){
  imgCollection[j].classList.add("scrolled");
  imgCollection[j].classList.add("scrolled-u");
}

btnNext.addEventListener("click", function(){
  for(let j = 0; j < imgCollection.length; j++){
    imgCollection[j].classList.remove("scrolled-u");
  }

  if(i == (imgCollection.length) - 1){
    imgCollection[i].classList.add("scrolled");
    imgCollection[i].classList.remove("show");
    i = 0;
    imgCollection[i].classList.remove("scrolled");
    imgCollection[i].classList.add("show");
  }else{
    i++;
    imgCollection[i - 1].classList.add("scrolled");
    imgCollection[i - 1].classList.remove("show");
    imgCollection[i].classList.remove("scrolled");
    imgCollection[i].classList.add("show");
  }
})

btnPrev.addEventListener("click", function(){
  for(let j = 0; j < imgCollection.length; j++){
    imgCollection[j].classList.remove("scrolled");
  }

  if(i == 0){
    imgCollection[i].classList.add("scrolled-u");
    imgCollection[i].classList.remove("show");
    i = (imgCollection.length) - 1;
    imgCollection[i].classList.remove("scrolled-u");
    imgCollection[i].classList.add("show");
  }else{
    i--;
    imgCollection[i + 1].classList.add("scrolled-u");
    imgCollection[i + 1].classList.remove("show");
    imgCollection[i].classList.remove("scrolled-u");
    imgCollection[i].classList.add("show");
  }
})