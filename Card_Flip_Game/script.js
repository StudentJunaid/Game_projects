var image1 = document.getElementById("card1")
var image2 = document.getElementById("card2")
var image3 = document.getElementById("card3")
function game(param) {
    var randomNumber = Math.ceil(Math.random() * 3);
    console.log(randomNumber);
    if (param === 1 && randomNumber === 1) {
        image1.src = "images/a.png"
       
    }
    else if (param === 1 && randomNumber === 2) {
        image1.src = "images/king.jpg"
    }
    else if (param === 1 && randomNumber === 3) {
        image1.src = "images/joker.jpg"
    }
    else if (param === 2 && randomNumber === 2) {
        image2.src = "images/king.jpg"
        alert("You Win")
    }
    else {
        image3.src = "images/joker.jpg"
        alert("You Loss")
    }
}
