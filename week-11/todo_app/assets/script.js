'use strict';

//ajax object
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
    }
}

let Drawer = {
    listElements: function(element) {
        this.listsUl = document.querySelector('.lists ul');
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
        callback(checkbox);
    },
    addDeleteButton: function(element, callback) {
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        this.listsUl.appendChild(deleteBtn);
        callback(deleteBtn);
    }
}

let Loader = {
    lists: function(data) {
        data.forEach(function(element) {
            Drawer.listElements(element);
            Drawer.addCheckbox(element, EventHandler.checkboxEventListener);
            Drawer.addDeleteButton(element, EventHandler.deleteButtonEventListener);
        });
    },
}


let EventHandler = {
    checkboxEventListener: function(checkbox) {
        checkbox.addEventListener('click', function() {
            if(checkbox.checked) {
                console.log('checked');
            } else {
                console.log('unchecked');
            }
        });
    },
    deleteButtonEventListener: function(deleteBtn) {
        deleteBtn.addEventListener('click', function() {
            console.log('deleted');
        });
    }
}
Requests.get(Loader.lists);