let music = document.querySelector('audio');
let img = document.querySelector('img');
let play = document.getElementById('play');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let title = document.getElementById('title');
let singer = document.getElementById('singer');
let saptarshi = false;
playmusic = () => {
    saptarshi = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add('anime');
};
pausemusic = () => {
    saptarshi = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove('anime');
};
play.addEventListener('click', () => {
    if (saptarshi) {
        pausemusic();
    }
    else {
        playmusic();
    }
});

let obj = [
    {
        riju: "five",
        title: "kon gopon e",
        singer: "Surangana Bandyopadhyay"
    },
    {
        riju: "four",
        title: "Kaamal",
        singer: "Badshah"
    },
    
     {
         riju: "one",
         title: "Main Tera Boyfriend",
         singer: "Arijit singh , Meet Bros & Neha Kakkar"
     },
    {
        riju: "two",
        title: "Shayad",
        singer: "Arijit singh"
    },
    {
        riju: "three",
        title: "Jab koi baat",
        singer: "Atif Aslam"
    },
    {
        riju: "six",
        title: "Ki6u chaini ami",
        singer: "Anirban Bhattacharya"
    },
]

const loadsong = (obj) => {
    title.textContent = obj.title;
    singer.textContent = obj.singer;
    music.src = obj.riju + ".mp3";
    img.src = obj.riju + ".jpg";
}
// loadsong(obj[2]);
songIndex = 0;
// const nextsong=()=>{
//     songindex = (songIndex + 1) % obj.length;
//     loadsong(obj[songIndex]);
//     // playmusic();
// };

let progress = document.getElementById('progress');
let song_duration = document.getElementById('duration');
let current_time = document.getElementById('current_time');
let progress_div = document.getElementById('progress_div');

music.addEventListener('timeupdate', (event) => {
    // console.log(event);
    const { currentTime, duration } = event.srcElement;

    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;

    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    if(sec_duration < 10){
        sec_duration = `0${sec_duration}`;
    }
    let total_duration = `${min_duration}:${sec_duration}`;
    if(duration){
        song_duration.textContent =`${total_duration}`;
    }
    
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);
    if(sec_currentTime < 10){
        sec_currentTime = `0${sec_currentTime}`;
    }
    let total_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${total_currentTime}`;
}); 

nextsong = () =>{
    songIndex = (songIndex + 1) % obj.length;
    loadsong(obj[songIndex]);
    playmusic();
}
music.addEventListener('ended',nextsong);
next.addEventListener("click", nextsong);
    
prev.addEventListener('click', prevsong = () => {
    songIndex = (songIndex - 1 + obj.length) % obj.length;
    loadsong(obj[songIndex]);
    playmusic();
});

progress_div.addEventListener('click', (event) => {
    const  { duration} = music;
    let abcd = (event.offsetX/event.srcElement.clientWidth)* duration;
    music.currentTime = abcd;
});