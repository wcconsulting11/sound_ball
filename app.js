window.addEventListener("load",() => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#ff0000",
        "#ffa500",
        "#ffff00",
        "#008000",
        "#0000ff",
        "#800080"
    ];

        //the sounds functions
    pads.forEach((pad, index) => {
        pad.addEventListener.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index); 
        });
        
    });
        //creates the bubbles
    const createBubble = index => {
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.annimation = 'jump 1s ease';
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
    };
    

});