function rain1() {
  let amount = Math.floor((Math.random()+1)*50);
  let body = document.querySelector('body');
  let i = 0;
  while (i < amount) {
    let drop = document.createElement('i');
  
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;
  
    drop.style.width = size + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration + 's';
  
    body.appendChild(drop);
    i++;
  }
}

function rain() {
  const rainBtn = document.querySelector('.func-btn');
  rainBtn.classList?.remove('func');
  rainBtn.addEventListener('click', () => {
    if(rainBtn.innerText === "The stars' last dance"){
      rainBtn.classList.remove('func');
      rainBtn.innerHTML = "Click here";
    }
    else {
      rainBtn.classList.add('func');
      rainBtn.innerHTML = "The stars' last dance";
      rain1();
    }
  })
}

rain();


// function rain1(cond) {
//   let amount = Math.floor((Math.random()+1)*50);
//   let body = document.querySelector('body');
//   let i = 0;
//   while (i < amount && cond) {
//     let drop = document.createElement('i');

//     let size = Math.random() * 5;
//     let posX = Math.floor(Math.random() * window.innerWidth);
//     let delay = Math.random() * -20;
//     let duration = Math.random() * 5;

//     drop.style.width = size + 'px';
//     drop.style.left = posX + 'px';
//     drop.style.animationDelay = delay + 's';
//     drop.style.animationDuration = 1 + duration + 's';

//     body.appendChild(drop);
//     i++;
//     if (!cond){
//       amount = 0;
//     }
//   }
// }

const facebook = document.querySelector('.fa-facebook');
const instagram = document.querySelector('.fa-instagram');
const twitter = document.querySelector('.fa-twitter');
const youtube = document.querySelector('.fa-youtube');