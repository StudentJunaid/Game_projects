const cardArray = [
    { name: "fries" ,
    img: "images/fries.png"
    },
    { name: "hotdog" ,
    img: "images/hotdog.png"
    },
    { name: "ice-cream" ,
    img: "images/ice-cream.png"
    },
    { name: "milkshake" ,
    img: "images/milkshake.png"
    },
    { name: "pizza" ,
    img: "images/pizza.png"
    },
    { name: "cheese" ,
    img: "images/cheeseburger.png"
    },
    { name: "fries" ,
    img: "images/fries.png"
    },
    { name: "hotdog" ,
    img: "images/hotdog.png"
    },
    { name: "ice-cream" ,
    img: "images/ice-cream.png"
    },
    { name: "milkshake" ,
    img: "images/milkshake.png"
    },
    { name: "pizza" ,
    img: "images/pizza.png"
    },
    { name: "cheese" ,
    img: "images/cheeseburger.png"
    },
];

let cardChoosen = [];
let cardChoosenIds = [];
let cardwon = []; 
cardArray.sort(() => 0.3 - Math.random())

let gridDisplay = document.querySelector("#grid");
let resultdisplay = document.querySelector('#result')


function createBoard(){
    for(let i=0; i<=11; i++){
        let card = document.createElement("img");
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMetch(){
    const cards = document.querySelectorAll("img") 
    console.log("checking Match")
   const optionOneid = cardChoosenIds[0]
   const optionTwoid = cardChoosenIds[1]

   if(optionOneid === optionTwoid){
    alert("you Click the same card")
    cards[optionOneid].setAttribute('src','images/blank.png')
    cards[optionTwoid].setAttribute('src','images/blank.png')
   }
    
    if(cardChoosen[0] === cardChoosen[1]){
        alert("you found a match")
        cards[optionOneid].setAttribute('src','images/white.png')
        cards[optionTwoid].setAttribute('src','images/white.png')
        cards[optionOneid].removeEventListener('click',flipcard)
        cards[optionTwoid].removeEventListener('click',flipcard)
        // cardwon.push(cardChoosen)
        cardwon.push(cardChoosen[0], cardChoosen[1]);
    }else{
        cards[optionOneid].setAttribute('src','images/blank.png')
        cards[optionTwoid].setAttribute('src','images/blank.png')
        alert("sorry try again")
    }

    resultdisplay.textContent = cardwon.length;
    cardChoosen = []
    cardChoosenIds = []

    if(cardwon.length == cardArray.length/2){
        resultdisplay.textContent =  'congratulation you found the all'
    }

    
}




function flipcard(){
    console.log(cardArray);
    const dataId = this.getAttribute('data-id')
    cardChoosen.push(cardArray[dataId].name)
    cardChoosenIds.push(dataId)
    this.setAttribute('src', cardArray[dataId].img)
    if(cardChoosen.length === 2){
        setTimeout(checkMetch,500)
    }
}


