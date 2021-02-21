'use_strict';

const names = [
        'bag.jpg',
        'banana.jpg',
        'bathroom.jpg',
        'boots.jpg',
        'breakfast.jpg',
        'bubblegum.jpg',
        'cthulhu.jpg',
        'dog-duck.jpg',
        'dragon.jpg',
        'pen.jpg',
        'pet-sweep.jpg',
        'scissors.jpg',
        'shark.jpg',
        'sweep.png',
        'tauntaun.jpg',
        'unicorn.jpg',
        'usb.gif',
        'water-can.jpg',
        'wine-glass.jpg',
        'chair.jpg'
      ];

let maxReach=0;
  
  const firstImage = document.getElementById('first-image');
  const secondImage = document.getElementById('second-image');
  const thirdImage = document.getElementById('third-image');
  console.log(firstImage);
  const imagesSection = document.getElementById('img-section');
  // const goats = [];
  function Buss(name) {
    this.name = name;
    this.path = `./img/${name}`;
    this.votes = 0;
    this.views = 0;
    //goats.push(this);
    Buss.all.push(this);
  }
  Buss.all = [];
  for (let i = 0; i < names.length; i++) {
    new Buss(names[i]);
  }
  console.table(Buss.all);
  const noRepeatArray = [];
  function render() {
    let firstImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
    let secondImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
    let thirdImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
    console.table(firstImgArr);
    while (firstImgArr.name===secondImgArr.name || secondImgArr.name===thirdImgArr.name || firstImgArr.name===thirdImgArr.name) {
      firstImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];;
      secondImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
      thirdImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
    }
    console.log('first', firstImgArr.path);
    firstImage.src = firstImgArr.path;
    firstImage.title = firstImgArr.name;
    firstImage.alt = firstImgArr.name;
    firstImgArr.views++;

    console.log('second', secondImgArr.path);
    secondImage.src = secondImgArr.path;
    secondImage.title = secondImgArr.name;
    secondImage.alt = secondImgArr.name;
    secondImgArr.views++;

    console.log('third', thirdImgArr.path);
    thirdImage.src = thirdImgArr.path;
    thirdImage.title = thirdImgArr.name;
    thirdImage.alt = thirdImgArr.name;
    thirdImgArr.views++;

    if(maxReach==25) {
        let printResult=document.getElementById("mylist");

        for (let i = 0; i < Buss.all.length; i++) {
            const print = document.createElement('li');
            printResult.appendChild(print);
           print = `${Buss.all[i].name} votes are ${Buss.all[i].votes} and Views are ${Buss.all[i].views}`
            
        }
    }

  }
  imagesSection.addEventListener('click', handleClick);
  
  function handleClick(event) {
    console.log('Target', event.target.id);
    
        if (event.target.id !== 'img-section' && maxReach!=25) {
            for (let i = 0; i < Buss.all.length; i++) {
              if (Buss.all[i].name === event.target.title) {
                Buss.all[i].votes++;
                maxReach++;
                // Buss.all[i].votes = Buss.all[i].votes + 1
              }
            }
            console.log(Buss.all);
            render();
          }
     
    }
    

  //helper functions
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  render();