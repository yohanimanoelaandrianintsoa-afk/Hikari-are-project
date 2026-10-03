let play_button = document.getElementById("play_music");
let music = document.getElementById("music");
let play_photo = document.getElementById("mp3_play_photo");
play_button.addEventListener("click",()=>{
    if (music.paused){
        music.play();
        play_photo.src="play_music.jpg";
    }
    else{
        console.log("PAUSE");
        music.pause();
        play_photo.src="video-play.png";
    }
    
});

