'use strict';
let allplaylistNamesArray = [];

let ajaxObject = function () {
    let httpRequest = new XMLHttpRequest();

    this.getData = function(url, callback) {
        httpRequest.open('GET', url);
        httpRequest.setRequestHeader('Accept', 'application/json');
        httpRequest.send();
        httpRequest.onreadystatechange = function() {
            if(httpRequest.status === 200 && httpRequest.readyState === 4) {
                let datas = JSON.parse(httpRequest.response);
                callback(datas);
            }
        }
    }

    this.postData = function(url, respond, callback) {
        httpRequest.open('POST', url);
        httpRequest.setRequestHeader('Accept', 'application/json');
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send(respond);
        httpRequest.onreadystatechange = function() {
            if(httpRequest.status === 200 && httpRequest.readyState === 4) {
                callback();
            }
        }
    }

    this.deleteData = function(url) {
        httpRequest.open('DELETE', url);
        httpRequest.setRequestHeader('Accept', 'application/json');
        httpRequest.send();
    }
}

let playlistsObject = function() {
    let ajax = new ajaxObject();
    const url = 'http://127.0.0.1:3000/playlists/';
    let dynamicPlaylist = document.querySelector('.main .content .left .playlists .dynamicPlaylists');
    let addPlaylistButton = document.querySelector('.main .content .left .upperPart .logoAndTitle .title p img');
    let divNewPlaylist = document.querySelector('.newPlaylist');
    let playlistName = document.querySelector('.newPlaylist input');
    let savePlaylist = document.querySelector('.newPlaylist img');

    let playlistClick = function(playList) {
        playList.addEventListener('click', function() {
            let select = playList.textContent;
            let queryUrl = url + 'selecttrack' + '?' + 'name=' + select;
            ajax.getData(queryUrl, render);
        });
    }

    let drawPlaylists = function(titleOfPlaylist, system) {
        if(titleOfPlaylist !== 'All tracks' && titleOfPlaylist !== 'Favourites') {
            allplaylistNamesArray.push(titleOfPlaylist);
        }
        console.log(allplaylistNamesArray);
        let playList = document.createElement('p');
        this.deleteButton = document.createElement('img');
        let span = document.createElement('span');
        this.deleteButton.setAttribute('src', '/assets/img/xicon.png');
        span.textContent = titleOfPlaylist;
        playList.appendChild(span);
        if(system === 1) {
            playList.appendChild(this.deleteButton);
        }
        dynamicPlaylist.appendChild(playList);
        
        playlistClick(playList);
    }

    let render = function(datas) {
        dynamicPlaylist.innerHTML = "";
        datas.forEach(function(element) {
            deletePlaylist(element);
        });
    }

    let deletePlaylist = function(element) {
        let deleteUrl = url + element.id;
        let deleteButton = new drawPlaylists(element.title, element.system).deleteButton;
        
        deleteButton.addEventListener('click', function() {
            ajax.deleteData(deleteUrl);
            dynamicPlaylist.removeChild(deleteButton.parentNode);
        });
    }

    let addPlaylist = function() {
        addPlaylistButton.addEventListener('click', function() {
            divNewPlaylist.style.display = 'inline';
        });
    }

    let savePlaylistFunction = function() {
        savePlaylist.addEventListener('click', function() {
            let respond = JSON.stringify({
                "playlist": playlistName.value
            });
            if(playlistName.value != '' && allplaylistNamesArray.includes(playlistName.value) === false) {
                ajax.postData(url, respond, loadpage);
            }
            divNewPlaylist.style.display = 'none';
        });
    }

    let loadpage = function() {
        allplaylistNamesArray = [];
        ajax.getData(url, render);
    }

    
    addPlaylist();
    ajax.getData(url, render);
}

let tracksObject = function() {
    let ajax = new ajaxObject();
    let selectaddSongToPlaylist = document.querySelector('.addSongToPlaylist select');
    let saveSong = document.querySelector('.addSongToPlaylist img');
    let addSongPlaylistButton = document.querySelector('.main .content .right .currentlyPlaying .images .addToPlaylist');
    let addSongToPlaylist = document.querySelector('.addSongToPlaylist');
    let tracks = document.querySelector('.main .content .right .tracks');
    let url = 'http://127.0.0.1:3000/playlist-track/';
    let currentlyPlayingTitle = document.querySelector('.main .content .right .currentlyPlaying .textData .title');
    let currentlyPlayingBand = document.querySelector('.main .content .right .currentlyPlaying .textData .band');
    let favouriteButton = document.querySelector('.main .content .right .currentlyPlaying .images .addToFavourites');
    
    let addSongFavourite = function() {
        favouriteButton.addEventListener('click', function() {
            let favUrl = 'http://127.0.0.1:3000/playlist-track-favourite/';
            let respond = JSON.stringify({
                "title": currentlyPlayingTitle.textContent,
                "artist": currentlyPlayingBand.textContent
            });
            ajax.postData(favUrl, respond, ajax.getData(url, render));
        })
    }

    let addSong = function() {
        addSongPlaylistButton.addEventListener('click', function() {
            selectaddSongToPlaylist.innerHTML = "";
            addSongToPlaylist.style.display = 'inline';
            allplaylistNamesArray.forEach(function(element) {
                console.log(element);
                let optionaddSongToPlaylist = document.createElement('option');
                optionaddSongToPlaylist.textContent = element;
                selectaddSongToPlaylist.appendChild(optionaddSongToPlaylist);

                saveSong.addEventListener('click', function() {
                    let respond = JSON.stringify({
                        "playlist": selectaddSongToPlaylist.value,
                        "title": currentlyPlayingTitle.textContent,
                        "artist": currentlyPlayingBand.textContent
                    });
                    console.log(respond);
                    ajax.postData(url, respond, ajax.getData(url, render));
                    addSongToPlaylist.style.display = 'none';
                });
            });
        })
    }

    let drawTracks = function(numberValue, titleValue, timeValue) {
        this.aRow = document.createElement('div');
        this.aRow.className = 'aRow';
        let numberAndTitle = document.createElement('span');
        numberAndTitle.className = "numberAndTitle";
        let number = document.createElement('span');
        let title = document.createElement('span');
        number.className = 'number';
        number.textContent = numberValue;
        title.className = 'title';
        title.textContent = titleValue;
        numberAndTitle.appendChild(number);
        numberAndTitle.appendChild(title);

        let time = document.createElement('span');
        time.className = 'time';
        time.textContent = timeValue;

        this.aRow.appendChild(numberAndTitle);
        this.aRow.appendChild(time);
        tracks.appendChild(this.aRow);
    };

    let render = function(datas) {
        let audio = document.querySelector('.controlPanel audio');
        let orderNumber = 1;
        datas.forEach(function(element) {
            let aRowNew = new drawTracks(orderNumber, element.title, timer(element.duration)).aRow;
            aRowNew.addEventListener('click', function() {
                audio.setAttribute('src', element.path);
                currentlyPlayingTitle.textContent = element.title;
                currentlyPlayingBand.textContent = element.artist;
            })
            orderNumber++;
        });
    }

    let timer = function(duration) {
        let minutes = parseInt(duration/60);
        let seconds = parseInt(duration%60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        let timeMinSec = minutes + ':' + seconds;
        return timeMinSec;
    }

    addSongFavourite();
    addSong();
    ajax.getData(url, render);
}

let audio = function() {
    this.forward = function() {
        // counter ++ play
    }

    this.rewind = function() {
        // counter -- play
    }

    this.shuffle = function() {
        // play random id music
    }
}

tracksObject();
playlistsObject();