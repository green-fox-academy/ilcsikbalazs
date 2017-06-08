'use strict';
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
    this.ajax = new ajaxObject();
    this.url = 'http://127.0.0.1:3000/playlists/';
    this.allplaylistNamesArray = [];
    this.dynamicPlaylist = document.querySelector('.main .content .left .playlists .dynamicPlaylists');
    this.addPlaylistButton = document.querySelector('.main .content .left .upperPart .logoAndTitle .title p img');
    this.divNewPlaylist = document.querySelector('.newPlaylist');
    this.playlistName = document.querySelector('.newPlaylist input');
    this.savePlaylist = document.querySelector('.newPlaylist img');
    
    this.draw = function(titleOfPlaylist) {
        this.allplaylistNamesArray.push(titleOfPlaylist);
        let playList = document.createElement('p');
        this.deleteButton = document.createElement('img');
        let span = document.createElement('span');
        this.deleteButton.setAttribute('src', '/assets/img/xicon.png');
        span.textContent = titleOfPlaylist;
        playList.appendChild(span);
        playList.appendChild(this.deleteButton);
        this.dynamicPlaylist.appendChild(playList);
    }
}

let playList = new playlistsObject();
playList.draw('kek');