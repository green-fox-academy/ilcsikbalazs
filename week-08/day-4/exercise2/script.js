'use strict';
//api key: 2397b55daba24a8495463d0329cffee0

let main = document.querySelector('.main');

let request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if(request.status === 200 && request.readyState === 4) {
        let article = JSON.parse(request.response);
        console.log(article);
        for(let i = 0; i < 10; i++) {
            let headline = article.response.docs[i].headline.main;
            let snippet = article.response.docs[i].snippet;
            let publicationDate = article.response.docs[i].pub_date;
            let div = document.createElement('div');
            let h1 = document.createElement('h1');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let link = document.createElement('a');
            h1.textContent = headline;
            p1.textContent = snippet;
            p2.textContent = publicationDate;
            div.appendChild(link);
            link.appendChild(h1);
            div.appendChild(p1);
            div.appendChild(p2);
            main.appendChild(div);
            link.setAttribute('href', article.response.docs[i].web_url);
        }
    }
}

request.open('GET', "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api_key=2397b55daba24a8495463d0329cffee0");
request.send();