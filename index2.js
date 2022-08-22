const $= document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);
const CONFIGURE_OPTION= 'MUSIC_LAYER';
const playList= $('.play-list');
const audio= $('#audio');
const play= $('#play');
const pause= $('.pause-btn');
const dashboardLayer= $('.main-poster__photo');

const app = {
    config: JSON.parse(localStorage.getItem(CONFIGURE_OPTION))||{},
    currnetIndex: 0,
    isPlaying: false,
    isRandom: false,
    isReplay: false,
    preIndex: 0,
    songs: [
        {   
            id: '1',
            name: 'Lối nhỏ',
            singer: 'Đen Vâu',
            img: 'access/img/song1.jpg',
            song: 'access/song/song1.mp3'
        },
        {
            id: '2',
            name: 'Rap Acoustic 4',
            singer: 'Đen x Kimmese x Lynk Lee',
            img: 'access/img/song2.jpg',
            song: 'access/song/song2.mp3'
        },
        {
            id: '3',
            name: 'Rap Acoustic 5',
            singer: 'Đen Vâu, Binz..',
            img: 'access/img/song3.jpg',
            song: 'access/song/song3.mp3'
        },
        {
            id: '4',
            name: 'Cô gái bàn bên',
            singer: 'Đen Vâu',
            img: 'access/img/song4.jpg',
            song: 'access/song/song4.mp3'
        }
        ,
        {
            id:'5',
            name: 'Left and right',
            singer: 'Charli Puth',
            img: 'access/img/song5.jpg',
            song: 'access/song/song5.mp3'
        },
        {
            id: '6',
            name: 'Kẻ theo đuổi ánh sáng',
            singer: 'Huy Vạc',
            img: 'access/img/Lucian_0.jpg',
            song: 'access/song/song6.mp3'
        },
        {   
            id: '7',
            name: 'Lối nhỏ',
            singer: 'Đen Vâu',
            img: 'access/img/song1.jpg',
            song: 'access/song/song1.mp3'
        },
        {
            id: '8',
            name: 'Rap Acoustic 4',
            singer: 'Đen x Kimmese x Lynk Lee',
            img: 'access/img/song2.jpg',
            song: 'access/song/song2.mp3'
        },
        {
            id: '9',
            name: 'Rap Acoustic 5',
            singer: 'Đen Vâu, Binz..',
            img: 'access/img/song3.jpg',
            song: 'access/song/song3.mp3'
        },
        {
            id: '10',
            name: 'Cô gái bàn bên',
            singer: 'Đen Vâu',
            img: 'access/img/song4.jpg',
            song: 'access/song/song4.mp3'
        }
        ,
        {
            id:'11',
            name: 'Left and right',
            singer: 'Charli Puth',
            img: 'access/img/song5.jpg',
            song: 'access/song/song5.mp3'
        },
        {
            id: '12',
            name: 'Kẻ theo đuổi ánh sáng',
            singer: 'Huy Vạc',
            img: 'access/img/Lucian_0.jpg',
            song: 'access/song/song6.mp3'
        },
        
        
    ],

    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currnetIndex]

            }
        })
    },
    setConfig: function(key, value){
        this.config[key] = value;
        localStorage.setItem(CONFIGURE_OPTION, JSON.stringify(this.config));
    },
    loadConfig: function() {
       
            app.isRandom= this.config.isRandom;
            app.isReplay= this.config.isReplay;
    },
     render: function() {
        
        playList.innerHTML =this.songs.map((song,index)=>{
            return `<div data-index= "${index}" class="play-list__song song-${song.id} ${index===this.currnetIndex ? 'active':''}">
            <div class="song-layer" style="background-image: url(${song.img});">
            </div>
            <div class="song-detail">
                <h4 class="song-detail__name">${song.name}</h4>
                <p class="song-detail__more">${song.singer}</p>
            </div>
            <div class="option">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>`
        }).join('')
        
    },

    eventHandle : function() {
        play.onclick = function() {
            // if(app.isPlaying) {
            //     audio.pause();
            // }else{
                // }
            audio.play();

            
            
        }
        // pause.onclick = function() {
        //     if(app.isPlaying) {
        //         audio.pause();
        //     }else{
        //         audio.play();

        //     }

            
            
        // }
        audio.onplay = function() {
            // pause.style.display= 'block';
            // play.style.display= 'none'; 
            app.isPlaying=true
            // layerSpiner.play();
        }
        // audio.onpause = function() {
        //     pause.style.display= 'none';
        //     play.style.display= 'block'; 
        //     app.isPlaying=false
        //     layerSpiner.pause();
        // }
        // end audio======
        audio.onended = function() {
            if(app.isReplay){
                audio.play();
            }
            else{
                if(app.isRandom){
                    app.randomSong()    
                }else{
                    app.nextSong();
                }
            }
            audio.play();
            app.activeSong()
        }
        //play song clicked
        playList.onclick = function(e){
            const songNode= e.target.closest('.play-list__song:not(.active)');
            if((songNode &&!e.target.closest('.option'))){
                // console.log(songNode.dataset.index)
                app.preIndex= app.currnetIndex;
                app.currnetIndex= e.target.closest('.play-list__song').dataset.index;
                app.loadCurrentSong();
                console.log(app.currentSong)
                app.activeSong()
                // app.scrollActive()
                audio.play();
            }
        }

    },
    loadCurrentSong: function() {
        // var heading= $('.heading-song-name')
        // heading.innerHTML= this.currentSong.name
        // console.log(dashboardLayer)
        // dashboardLayer.style.backgroundImage= `url('${this.currentSong.img}')`
        audio.src= this.currentSong.song
        // headingName.innerHTML= this.currentSong.name
    },

    activeSong: function() {
        var currentId= app.songs[app.currnetIndex].id
        var preId= app.songs[app.preIndex].id
        var currentElment= $(`.song-${currentId}`)
        var preElement= $(`.song-${preId}`)
        currentElment.classList.add('active')
        preElement.classList.remove('active')
        // app.scrollToActiveSong();
    },



    start: function() {
        this.loadConfig();
        this.defineProperties();
        this.render();
        this.loadCurrentSong();
        this.eventHandle();
        //first status update
        // randomSongBtn.classList.toggle('active', app.isRandom)
        // replayBtn.classList.toggle('active', app.isReplay);
        
    }
}
app.start();