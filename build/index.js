var perso = document.querySelector(".perso"); 
var obstacles = document.querySelector(".obstacles"); 

function sauter() {
    if ( !perso.classList.contains("animation")) {
        perso.classList.toggle("animation")
    }
    setTimeout(() => {
        perso.classList.toggle("animation")
    }, 500);
}

// verifier si obstacle touche le personnage

var verification = setInterval(() => {
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"))
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"))
    // console.log(persoTop)
    // console.log(obstaclesLeft)

    if (obstaclesLeft < 20  &&  obstaclesLeft > 0  &&  persoTop >= 130) {
        obstacles.style.animation = "none";
        alert("vous avez perdu!")
    }
}, 1);