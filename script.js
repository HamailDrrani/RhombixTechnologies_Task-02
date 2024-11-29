console.log("connected");
// Initialize the Variables
let songIndex = 1;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar =document.getElementById("progress-bar");
let masterSongName = document.getElementById("masterSongName");
let songItems =Array.from (document.getElementsByClassName("song-item"));

let songs = [
    {songName:"Still With You by JungKook", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Just One Day by BTS", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Alibi Sevdaliza ft. Pabllo & Yseult", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"APT - ROSÉ & Bruno Mars ", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Husn by Anuv Jain", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Ishq by Amir Ameer Faheem Abdullah", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Bol Kaffara Sehar gul Shehbaz Fayaz", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Jo Tum Mere Ho by Anuv Jain", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
]
songItems.forEach((element,i)=>{
    // console.log(element,i)
 element.getElementsByTagName("img")[0].src = songs[i].coverPath;
 element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
}
)
// audioElement.play()
// Handle play/pause/click
masterPlay.addEventListener("click",()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
})
// Listen to Events
audioElement.addEventListener("timeupdate",()=>{
//    console.log("timeupdate");
// Update seek-bar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause")


    })
}
// For songs play one by one
Array.from (document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
     console.log(e.target);
     makeAllPlays();
     songIndex =parseInt(e.target.id);
     e.target.classList.remove("fa-circle-play");
     e.target.classList.add("fa-circle-pause");
     audioElement.src=`songs/${songIndex}.mp3`;
    //  masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove("fa-circle-play");
     masterPlay.classList.add("fa-circle-pause");
    })
})
// For previous & next songs
document.getElementById("next").addEventListener("click",()=>{
   if(songIndex>=8){
    songIndex = 0
   }
   else{
       songIndex += 1;
   }
     audioElement.src=`songs/${songIndex}.mp3`;
    //  masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove("fa-circle-play");
     masterPlay.classList.add("fa-circle-pause");
})
document.getElementById("previous").addEventListener("click",()=>{
   if(songIndex<=1){
    songIndex = 0
   }
   else{
       songIndex -= 1;
   }
     audioElement.src=`songs/${songIndex}.mp3`;
    //  masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove("fa-circle-play");
     masterPlay.classList.add("fa-circle-pause");
})
