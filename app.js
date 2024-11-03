let card = document.querySelector(".card");
let cardContainer = document.querySelector(".card-container");
let cake = document.querySelector(".cake");
let songs = document.querySelector(".songs");
let playbtn = document.querySelector(".fa-solid");
let music = document.querySelector("#song");


let show = true;
let musicPlay = true;

card.addEventListener("click", () => {
    card.style.transform = "perspective(1500px) rotateY(-110deg)";
    cardContainer.style.marginLeft = "30px";
})

cake.addEventListener("click", () => {
    if (show) {
        cake.style.transform = "perspective(1500px) rotateY(-110deg)";
        cake.style.zIndex = 3
    }
    else {
        card.style.transform = "perspective(1500px) rotateY(0deg)";
        card.style.zIndex = 3
        cardContainer.style.marginLeft = "0";
        show = true;
    }
})

playbtn.addEventListener("click", () => {
    if (musicPlay) {
        music.play();
        playbtn.classList.add("fa-pause");
        playbtn.classList.remove("fa-play");
        musicPlay = false;
    }
    else {
        music.pause();
        playbtn.classList.add("fa-play");
        playbtn.classList.remove("fa-pause");
        musicPlay = true;
    }

})
songs.addEventListener("click", () => {
    if (musicPlay) {
        cake.style.transform = "perspective(1500px) rotateY(0deg)";
        cake.style.zIndex = 2
        show = false;
    }
})

