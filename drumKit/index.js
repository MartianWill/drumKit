//keydown
document.addEventListener("keydown", 
Event =>{makeSound(Event.key);
    buttonAnime(Event.key);
    })

//CLICK
var numOfDrumBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i<numOfDrumBtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", 
    function (){makeSound(this.innerHTML);
        buttonAnime(this.innerHTML)});
}

function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            console.log("w");
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            console.log("a");
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            console.log("s");
            break;    
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            console.log("d");
        break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            console.log("j");
        break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            console.log("k");
        break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            console.log("l");
        break;
        default:
            console.log(key + " " +typeof(key) +" no function");
        break;
    }
}

function buttonAnime(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(()=> activeButton.classList.remove("pressed"), 100);
}
