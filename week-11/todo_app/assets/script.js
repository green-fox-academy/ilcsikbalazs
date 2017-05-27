'use strict';

// let httprequest = new XMLHttpRequest();
// httprequest.open('GET', 'http://127.0.0.1:8080/list');
// httprequest.setRequestHeader('Accept', 'application/json');
// httprequest.send();
// httprequest.onreadystatechange = function() {
//     if(httprequest.status === 200 && httprequest.readyState === 4) {
//         let data = JSON.parse(httprequest.response);
//         console.log(data);
//     }
// }

//ajax object
let requests = { 
    url: 'http://127.0.0.1:8080/list',
    httprequest: new XMLHttpRequest(),

    get: function() {
        this.httprequest.open('GET', this.url);
        this.httprequest.setRequestHeader('Accept', 'application/json');
        this.httprequest.send();
        this.httprequest.onreadystatechange = function() {
            if(this.httprequest.status === 200 && this.httprequest.readyState === 4) {
                let data = JSON.parse(this.httprequest.response);
                console.log(data);
            }
        }.bind(this)
    }
}

requests.get();
//event listener

//load page