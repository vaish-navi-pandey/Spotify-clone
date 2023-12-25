console.log("Welcome to Spotify");
let songindex=0;
let audioelement=new Audio("mysong1.mp3");
let masterplay=document.getElementById('masterplay');
let bar=document.getElementById("bar");
let poster=document.getElementById("posters");
let songitemplay=Array.from(document.getElementsByClassName("songitemplay"));
let songitems=Array.from(document.getElementsByClassName("songnames"));
let Songs=[
    {songName:"Raatein Lambiyan",filepath:"/Users/vaishnavipandey/Desktop/spotify/mysong1.mp3",coverpath:"photo/song1.jpeg",songaudio:"mysong1.mp3"},
    {songName:"Phir Aur Kya Chahiye",filepath:"mysong2.mp3",coverpath:"photo/song2.jpeg",songaudio:"mysong2.mp3"},
    {songName:"Tum Kya Mile",filepath:"mysong3.mp3",coverpath:"photo/song3.jpeg",songaudio:"mysong3.mp3"},
    {songName:"Tujhe Kitna Chahne Lage",filepath:"/Users/vaishnavipandey/Downloads/Raataan Lambiyan - Shershaah 128 Kbps.mp3",coverpath:"photo/song4.jpeg",songaudio:"mysong4.mp3"},
    {songName:"What Jhumka",filepath:"/Users/vaishnavipandey/Downloads/Raataan Lambiyan - Shershaah 128 Kbps.mp3",coverpath:"photo/song5.jpeg",songaudio:"mysong5.mp3"},
    {songName:"Mann Bharryaa",filepath:"/Users/vaishnavipandey/Downloads/Raataan Lambiyan - Shershaah 128 Kbps.mp3",coverpath:"photo/song6.jpeg",songaudio:"mysong6.mp3"},
    {songName:"O Bedardaya",filepath:"/Users/vaishnavipandey/Downloads/Raataan Lambiyan - Shershaah 128 Kbps.mp3",coverpath:"photo/song7.jpeg",songaudio:"mysong7.mp3"},
    {songName:"Shayad",filepath:"/Users/vaishnavipandey/Downloads/Raataan Lambiyan - Shershaah 128 Kbps.mp3",coverpath:"photo/song8.jpeg",songaudio:"mysong8.mp3"},
    {songName:"Ghodey Pe Sawar",filepath:"/Users/vaishnavipandey/Downloads/Raataan Lambiyan - Shershaah 128 Kbps.mp3",coverpath:"photo/song9.jpeg",songaudio:"mysong9.mp3"},
    {songName:"Ranjha",filepath:"/Users/vaishnavipandey/Downloads/Raataan Lambiyan - Shershaah 128 Kbps.mp3",coverpath:"photo/song10.jpeg",songaudio:"mysong10.mp3"}
]

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=Songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=Songs[i].songName;

})

masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play(); 
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        elem=document.getElementById(songindex);
        elem.classList.remove("fa-play-circle");
        elem.classList.add("fa-pause-circle");
    }
    else{
        audioelement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle"); 
        songitemplay.forEach((element)=>{
            element.classList.remove("fa-pause-circle");
            element.classList.add("fa-play-circle");
        })
    }
    
})

audioelement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    //console.log(progress);
    bar.value=progress;
})

bar.addEventListener('change',()=>{
    audioelement.currentTime=bar.value*audioelement.duration/100;
})
const makeallplay=()=>{
    songitemplay.forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

songitemplay.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        songindex=parseInt(e.target.id);
        audioelement.src=Songs[songindex].songaudio;
        if(audioelement.paused||audioelement.currentTime<=0){
            audioelement.play(); 
            poster.src=Songs[songindex].coverpath;
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");         
       }
       else{
        audioelement.pause();
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");      

       }
       
    })
    }
)

document.getElementById("previous").addEventListener('click',()=>{
    if(songindex<1){
        songindex=0;
    }
    else{
        songindex-=1
    }
    audioelement.src=Songs[songindex].songaudio;
    audioelement.play(); 
    poster.src=Songs[songindex].coverpath;
    ele=document.getElementById(songindex);
    elecurr=document.getElementById(songindex+1);
    ele.classList.remove("fa-play-circle");
    ele.classList.add("fa-pause-circle");
    elecurr.classList.remove("fa-pause-circle");
    elecurr.classList.add("fa-play-circle");
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle"); 


})

document.getElementById("next").addEventListener('click',()=>{
    if(songindex>8){
        songindex=9;
    }
    else{
        songindex+=1
    }
    audioelement.src=Songs[songindex].songaudio;
    audioelement.play(); 
    poster.src=Songs[songindex].coverpath;
    ele=document.getElementById(songindex);
    elecurr=document.getElementById(songindex-1);
    ele.classList.remove("fa-play-circle");
    ele.classList.add("fa-pause-circle");
    elecurr.classList.remove("fa-pause-circle");
    elecurr.classList.add("fa-play-circle");
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle"); 


})
