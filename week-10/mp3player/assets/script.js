'use strict';

let addPlaylistButton = document.querySelector('.main .content .left .upperPart .logoAndTitle .title p img');
let dynamicPlaylist = document.querySelector('.main .content .left .playlists .dynamicPlaylists');
let divNewPlaylist = document.querySelector('.newPlaylist');
let playlistName = document.querySelector('.newPlaylist input');
let savePlaylist = document.querySelector('.newPlaylist img');
let tracks = document.querySelector('.main .content .right .tracks');
let addSongPlaylistButton = document.querySelector('.main .content .right .currentlyPlaying .images .addToPlaylist');
let addSongToPlaylist = document.querySelector('.addSongToPlaylist');
let audio = document.querySelector('.controlPanel audio');
let currentlyPlayingTitle = document.querySelector('.main .content .right .currentlyPlaying .textData .title');
let currentlyPlayingBand = document.querySelector('.main .content .right .currentlyPlaying .textData .band');
let selectaddSongToPlaylist = document.querySelector('.addSongToPlaylist select');
let saveSong = document.querySelector('.addSongToPlaylist img');
let allplaylistNamesArray = [];


addPlaylistButton.addEventListener('click', function() {
    divNewPlaylist.style.display = 'inline';
});

addSongPlaylistButton.addEventListener('click', function() {
    addSongToPlaylist.style.display = 'inline';
    allplaylistNamesArray.forEach(function(element) {
        let optionaddSongToPlaylist = document.createElement('option');
        optionaddSongToPlaylist.textContent = element;
        selectaddSongToPlaylist.appendChild(optionaddSongToPlaylist);
        saveSong.addEventListener('click', function() {
            addSongToPlaylist.style.display = 'none';
        });
    });
});

savePlaylist.addEventListener('click', function() {
    //this funcition will be useless when post method is done
    drawPlaylits(playlistName.value);
});

function drawPlaylits(titleOfPlaylist) {
    if(titleOfPlaylist != '' && allplaylistNamesArray.includes(titleOfPlaylist) === false) {
        allplaylistNamesArray.push(titleOfPlaylist);
        console.log(allplaylistNamesArray);
        let playList = document.createElement('p');
        let deleteButton = document.createElement('img');
        let span = document.createElement('span');
        deleteButton.setAttribute('src', '/assets/img/xicon.png');
        span.textContent = titleOfPlaylist;
        playList.appendChild(span);
        playList.appendChild(deleteButton);
        dynamicPlaylist.appendChild(playList);
        return deleteButton;        
    } else {
        console.log('You have not named your playlist');
    }
    divNewPlaylist.style.display = 'none';
}

function drawTracks(numberValue, titleValue, timeValue) {
    let aRow = document.createElement('div');
    aRow.className = 'aRow';
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

    aRow.appendChild(numberAndTitle);
    aRow.appendChild(time);
    tracks.appendChild(aRow);
    return aRow;
}

function renderPlaylits() {
    let url = 'http://127.0.0.1:3000/playlists/';
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url);
    httpRequest.setRequestHeader('Accept', 'application/json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.status === 200 && httpRequest.readyState === 4) {
            let datas = JSON.parse(httpRequest.response);
            console.log(datas);
            datas.forEach(function(element) {

                let deleteUrl = url + element.id;

                let deleteButton = drawPlaylits(element.title);

                deleteButton.addEventListener('click', function() {
                    httpRequest.open('DELETE', deleteUrl);
                    httpRequest.setRequestHeader('Accept', 'application/json');
                    httpRequest.send();
                    httpRequest.onreadystatechange = function() {
                        if(httpRequest.status === 200 && httpRequest.readyState === 4) {
                            let index = allplaylistNamesArray.indexOf(titleOfPlaylist);
                            allplaylistNamesArray.splice(index, 1);
                            dynamicPlaylist.removeChild(playList);
                            console.log(allplaylistNamesArray);
                        }
                    }
                    
                });
            });
        }
    } 
}
renderPlaylits();

function renderTracks() {
    let url = 'http://127.0.0.1:3000/playlist-track';
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url);
    httpRequest.setRequestHeader('Accept', 'application/json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.status === 200 && httpRequest.readyState === 4) {
            let datas = JSON.parse(httpRequest.response);
            console.log(datas);
            let orderNumber = 1;
            datas.forEach(function(element) {
                let aRowNew = drawTracks(orderNumber, element.title, timer(element.duration));
                orderNumber++;
                aRowNew.addEventListener('click', function() {
                    audio.setAttribute('src', element.path);
                    currentlyPlayingTitle.textContent = element.title;
                    currentlyPlayingBand.textContent = element.artist;
                });
            });
        }
    } 
}
renderTracks();

function timer(duration) {
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
