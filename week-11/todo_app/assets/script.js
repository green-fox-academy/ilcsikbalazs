'use strict';

let Requests = { 
    get: function(callback) {
        let httprequest = new XMLHttpRequest();
        httprequest.open('GET', 'http://127.0.0.1:8080/list');
        httprequest.setRequestHeader('Accept', 'application/json');
        httprequest.send();
        httprequest.onreadystatechange = function() {
            if(httprequest.status === 200 && httprequest.readyState === 4) {
                let data = JSON.parse(httprequest.response);
                callback(data);
            }
        };
    },
    post: function(respond) {
        let httprequest = new XMLHttpRequest();
        httprequest.open('POST', 'http://127.0.0.1:8080/list');
        httprequest.setRequestHeader('Accept', 'application/json');
        httprequest.setRequestHeader('Content-Type', 'application/json');
        httprequest.send(respond);
        httprequest.onreadystatechange = function() {
            if(httprequest.status === 200 && httprequest.readyState === 4) {
                Requests.get(Loader.lists);
            }
        };
    },
    delete: function(url) {
        let httprequest = new XMLHttpRequest();
        httprequest.open('DELETE', url);
        httprequest.setRequestHeader('Accept', 'application/json');
        httprequest.setRequestHeader('Content-Type', 'application/json');
        httprequest.send();
        httprequest.onreadystatechange = function() {
            if(httprequest.status === 200 && httprequest.readyState === 4) {
                Requests.get(Loader.lists);
            }
        };
    },
    put: function(url, respond) {
        let httprequest = new XMLHttpRequest();
        httprequest.open('PUT', url);
        httprequest.setRequestHeader('Accept', 'application/json');
        httprequest.setRequestHeader('Content-Type', 'application/json');
        httprequest.send(respond);
        httprequest.onreadystatechange = function() {
            if(httprequest.status === 200 && httprequest.readyState === 4) {
                Requests.get(Loader.lists);
            }
        };
    }
}

let Drawer = {
    textbox: document.querySelector('.controlls input'),
    createBtn: document.querySelector('.controlls button'),
    listsUl: document.querySelector('.lists ul'),
    listElements: function(element) {
        let listElement = document.createElement('li');
        listElement.innerText = element.text;
        this.listsUl.appendChild(listElement);
    },
    addCheckbox: function(element, callback) {
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        if(element.completed) {
            checkbox.checked = true;
        }
        this.listsUl.appendChild(checkbox);
        let idCheck = element.id;
        callback(checkbox, idCheck);
    },
    addDeleteButton: function(element, callback) {
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        this.listsUl.appendChild(deleteBtn);
        let idDelete = element.id;
        callback(deleteBtn, idDelete);
    },
    createTask: function(callback) {
        callback(this.createBtn);
    }
}

let Loader = {
    controlls: function() {
        Drawer.createTask(EventHandler.createBtnEventListener);
    },
    lists: function(data) {
        Drawer.listsUl.innerHTML = "";
        data.forEach(function(element) {
            Drawer.listElements(element);
            Drawer.addCheckbox(element, EventHandler.checkboxEventListener);
            Drawer.addDeleteButton(element, EventHandler.deleteButtonEventListener);
        });
    }
}


let EventHandler = {
    checkboxEventListener: function(checkbox, idCheck) {
        checkbox.addEventListener('click', function() {
            let url = 'http://127.0.0.1:8080/list/' + idCheck
            if(checkbox.checked) {
                let respond = JSON.stringify({
                    "completed": 1
                });
                Requests.put(url, respond);
            } else {
                let respond = JSON.stringify({
                    "completed": 0
                });
                Requests.put(url, respond);
            }
        });
    },
    deleteButtonEventListener: function(deleteBtn, idDelete) {
        deleteBtn.addEventListener('click', function() {
            let url = 'http://127.0.0.1:8080/list/' + idDelete;
            Requests.delete(url);
        });
    },
    createBtnEventListener: function(createBtn) {
        createBtn.addEventListener('click', function() {
            let respond = JSON.stringify({
                text: Drawer.textbox.value
            });
            Requests.post(respond);
        });
    }
}

Requests.get(Loader.lists);
Loader.controlls()