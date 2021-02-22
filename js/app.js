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


      let repeatCheck = [];

      let maxReach=0;
  

      let buttonPressed=false;

    
  const firstImage = document.getElementById('first-image');
  const secondImage = document.getElementById('second-image');
  const thirdImage = document.getElementById('third-image');
  const imagesSection = document.getElementById('img-section');
  
  function Buss(name) {
    this.name = name.split('.')[0];
    this.path = `./img/${name}`;
    this.votes = 0;
    this.views = 0;
    Buss.all.push(this);
  }

Buss.all=[];

for (let i = 0; i < names.length; i++) {
    new Buss(names[i]);
  }


  

  function render() {
    let firstImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
    let secondImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
    let thirdImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
    console.table(firstImgArr);
    while (firstImgArr.name===secondImgArr.name || secondImgArr.name===thirdImgArr.name || firstImgArr.name===thirdImgArr.name || repeatCheck.includes(firstImgArr) || repeatCheck.includes(secondImgArr) || repeatCheck.includes(thirdImgArr)) {
      firstImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];;
      secondImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
      thirdImgArr = Buss.all[randomNumber(0, Buss.all.length - 1)];
    }

    repeatCheck = [];
    repeatCheck.push(firstImgArr);
    repeatCheck.push(secondImgArr);
    repeatCheck.push(thirdImgArr);

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

    if(maxReach==5 && document.getElementById("button").disabled == false) {
        let printResult=document.getElementById("mylist");
            console.log(printResult);
            for (let i = 0; i < Buss.all.length; i++) {
                let print = document.createElement('li');
                printResult.appendChild(print);
               print.textContent = `${(Buss.all[i].name).toUpperCase()} had ${Buss.all[i].votes} Votes and was seen ${Buss.all[i].views} Times.`;
               console.log(print);}
               document.getElementById('button').disabled = true;
    
      
      imagesSection.removeEventListener('click', handleClick);

        }
    }

  imagesSection.addEventListener('click', handleClick);
  
  function handleClick(event) {
    console.log('Target', event.target.id);
    
        if (event.target.id !== 'img-section') {
            for (let i = 0; i < Buss.all.length; i++) {
              if (Buss.all[i].name === event.target.title) {
                Buss.all[i].votes++;
                maxReach++;
              }
            }
            render();
          }
     
    }
    
   

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function chart(){
    const allVotes = [];
    const allVeiws = [];
    const allNames = [];

    var ctx = document.getElementById('my-chart').getContext('2d');
    for (let i = 0; i < Buss.all.length; i++) {
      allVotes.push(Buss.all[i].votes);
      allVeiws.push(Buss.all[i].views);
      allNames.push(Buss.all[i].name);
      console.log(allVeiws);
      console.log(allVotes);
    }
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: allNames,
        datasets: [{
          label: 'Votes',
          backgroundColor: 'rgb(25, 99, 132)',
          borderColor: 'rgb(25, 199, 132)',
          data: allVotes
        },
        {
          label: 'Veiws',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: allVeiws
        }

        ]
      },

      // Configuration options go here
      options: {}
    });
  }
  chart();
  render();