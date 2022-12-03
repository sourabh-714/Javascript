E
window.addEventListener('load', bindEvents);
function bindEvents(){
    document.getElementById('searchbt')
    .addEventListener('click', searchIt);
}

function searchIt(){
    const singerName = document.getElementById('searchbox')
    .value;
    ajax(singerName, printSongs);

}

function songCard(song){
    /*
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
    const cardDiv = document.createElement('div'); //<div> </div>
    cardDiv.className = 'card';
    cardDiv.style.width = '18rem';
    const image = document.createElement('img');
    image.src = song['artworkUrl100'];
    cardDiv.appendChild(image); 
    const cardBody = createAudioTag(song['previewUrl']);
    cardDiv.appendChild(cardBody);
    document.getElementById('songs').appendChild(cardDiv);
    
    // Audio Player 
}

function printSongs(json){
    //console.log('Print Songs JSON Rec ', json);
    document.getElementById('songs').innerHTML = '';
    const obj = JSON.parse(json);
    console.log('Object Rec ', obj);
    const songs = obj['results'];
    songs.forEach(song =>songCard(song));
}

function createAudioTag(url){
    /*
    <div class="card-body">
    <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3">
        </div>
    */
    const divBody = document.createElement('div');
    divBody.className = 'card-body';
   const audio = document.createElement('audio');
   //audio.controls = true;
   audio.src = url;
   divBody.appendChild(audio);
   const button = panel();
   divBody.appendChild(button);
   return divBody;
}
function panel(){
    //<i class="fa-solid fa-play"></i>
    const button = document.createElement('button');
    button.className = 'btn btn-primary fa-solid fa-play';
    button.addEventListener('click', playPauseSong);
    return button;
}
var isPlaying = false;
var prevSong = null;
function playPauseSong(){
    console.log('What is this ', this, this.previousSibling);
    let className = '';
    const audio = this.previousSibling;
    // Prev Song is Playing
    if(prevSong != audio){
    if(prevSong && prevSong.currentTime>0){
        prevSong.pause();
        prevSong.currentTime = 0;
        isPlaying =false;
        prevSong.nextSibling.className = 'btn btn-primary fa-solid fa-play';
    } 
}
    if(isPlaying){
        audio.pause();
        className = 'btn btn-primary fa-solid fa-play';
    }
    else{
     
    audio.play();
    prevSong = audio;
    className = 'btn btn-primary fa-solid fa-pause';
    }
    this.className = className;
    isPlaying = !isPlaying;
}