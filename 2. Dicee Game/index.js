function selectImages(image, num){
    var src = "images/dice"+num+".png";
    image.setAttribute("src",src);
}

function winner(num1, num2){
    if (num1>num2){
        return "🚩 Player 1 Wins!";
    }
    else if (num1<num2){
        return "Player 2 Wins! 🚩";
    }
    return "🚩Match Draw🚩";
}

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var images = document.querySelectorAll("img");
selectImages(images[0], randomNumber1);
selectImages(images[1], randomNumber2);
document.querySelector("h1").textContent = winner(randomNumber1, randomNumber2);