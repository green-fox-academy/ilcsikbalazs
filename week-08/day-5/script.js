let home = document.querySelector('#home');
let submitPost = document.querySelector('#submit');
let homePage = document.querySelector('.homePage');

home.addEventListener('click', function(){
    var visible = document.querySelector('.visible');
    visible.setAttribute('class', 'unvisible');
    let homePage = document.querySelector('.homePage');
    if (homePage.parentNode.getAttribute('class') === 'unvisible'){
        homePage.parentNode.setAttribute('class', 'visible');
    }
})

submitPost.addEventListener('click', function(){
    let visible = document.querySelector('.visible');
    visible.setAttribute('class', 'unvisible');
    let submitPage = document.querySelector('.submitPage');
    if (submitPage.parentNode.getAttribute('class') === 'unvisible'){
        submitPage.parentNode.setAttribute('class', 'visible');
    }
})

home.addEventListener('click', function(){
    loadPage();
})

function loadPage() {
    homePage.innerHTML = "";
    let redditRequest = new XMLHttpRequest();
    let url = 'https://time-radish.glitch.me/posts';
    redditRequest.open('GET', url);
    redditRequest.setRequestHeader('Accept', 'application/json');
    redditRequest.send();

    redditRequest.onreadystatechange = function() {
        if(redditRequest.status === 200 && redditRequest.readyState === 4) {
            console.log(JSON.parse(redditRequest.response));
            let datas = JSON.parse(redditRequest.response);
            let lengthOfData = datas.posts.length;
            let counter = 1;

            for(let i = 0; i < lengthOfData ; i++) {
                let score = datas.posts[i].score;
                let href = datas.posts[i].href;
                let hrefText = datas.posts[i].title;
                let monthAgo = 1;
                let userName = datas.posts[i].owner;

                let onePost = document.createElement('div');
                onePost.setAttribute('class', 'onePost');
                let postNumber = document.createElement('div');
                postNumber.innerText = counter;
                postNumber.setAttribute('class','postNumber');

                let vote = document.createElement('div');
                vote.setAttribute('class','vote');
                let upvote = document.createElement('img');
                upvote.setAttribute('src', 'images/upvote.png');
                upvote.setAttribute('class','upvote');
                vote.appendChild(upvote);
                let voteNumbers = document.createElement('p');
                voteNumbers.setAttribute('class', 'voteNumbers');
                voteNumbers.innerText = score;
                let downvote = document.createElement('img');
                vote.appendChild(voteNumbers);
                downvote.setAttribute('class', 'downvote');
                downvote.setAttribute('src', 'images/downvote.png');
                vote.appendChild(downvote);

                let content = document.createElement('div');
                content.setAttribute('class', 'content');
                let title = document.createElement('div');
                title.setAttribute('class', 'title');
                let titleA = document.createElement('a');
                titleA.setAttribute('href', href);
                titleA.innerText = hrefText;
                title.appendChild(titleA);
                content.appendChild(title);

                let submitted = document.createElement('div');
                submitted.setAttribute('class', 'submitted');
                let submittedP = document.createElement('p');
                let submittedSpamNum = document.createElement('span');
                submittedSpamNum.innerText = monthAgo;
                let submittedSpamUser = document.createElement('span');
                submittedSpamUser.innerText = userName;
                submittedP.innerHTML = 'submitted '+monthAgo+' mounth ago by '+userName;
                submitted.appendChild(submittedP);
                content.appendChild(submitted);

                let options = document.createElement('div');
                options.setAttribute('class', 'options');
                let modify = document.createElement('p');
                modify.setAttribute('class', 'modify');
                modify.innerText = 'modify';
                let remove = document.createElement('p');
                remove.setAttribute('class', 'remove');
                remove.innerText = 'remove';
                options.appendChild(modify);
                options.appendChild(remove);
                content.appendChild(options);

                onePost.appendChild(postNumber);
                onePost.appendChild(vote);
                onePost.appendChild(content);
                homePage.appendChild(onePost);
                
                counter++;

                remove.addEventListener('click', function() {
                    let currentID = datas.posts[i].id
                    let url = 'https://time-radish.glitch.me/posts/'+currentID;
                    redditRequest.open('DELETE', url);
                    redditRequest.setRequestHeader('Accept', 'application/json');
                    redditRequest.send();
                    redditRequest.onreadystatechange = function() {
                    if(redditRequest.status === 200 && redditRequest.readyState === 4) {
                        loadPage();
                    }}
                })

                // let modifyRequest = new XMLHttpRequest();
                // let url = 'https://time-radish.glitch.me/posts';
                // modifyRequest.open('POST', url);
                // modifyRequest.setRequestHeader('Accept', 'application/json');
                // modifyRequest.setRequestHeader('Content-Type', 'application/json');

                // modify.addEventListener('click', function() {
                //     let modifyUrl = document.createElement('');
                //     let modifyTitle = document.createElement('');
                //     modifyRequest.send(JSON.stringify({
                //         "title": modifyTitle.value,
                //         "href": modifyUrl.value,
                //     }))
                // })

                upvote.addEventListener('click', function() {
                    let currentID = datas.posts[i].id
                    let upvoteRequest = new XMLHttpRequest();
                    let url = 'https://time-radish.glitch.me/posts/'+currentID+'/upvote';
                    upvoteRequest.open('PUT', url);
                    upvoteRequest.setRequestHeader('Accept', 'application/json');
                    let scoreIncrement = datas.posts[i].score + 1;
                    upvoteRequest.send();
                    voteNumbers.innerText = parseInt(voteNumbers.innerText) + 1;
                })

                downvote.addEventListener('click', function() {
                    let currentID = datas.posts[i].id
                    let downvoteRequest = new XMLHttpRequest();
                    let url = 'https://time-radish.glitch.me/posts/'+currentID+'/downvote';
                    downvoteRequest.open('PUT', url);
                    downvoteRequest.setRequestHeader('Accept', 'application/json');
                    let scoreIncrement = datas.posts[i].score - 1;
                    downvoteRequest.send();
                    voteNumbers.innerText = parseInt(voteNumbers.innerText) - 1;
                })

            }
        }
    }
}
loadPage();

function createNewPostloadPage() {
    let redditRequest = new XMLHttpRequest();
    let url = 'https://time-radish.glitch.me/posts';
    redditRequest.open('POST', url);
    redditRequest.setRequestHeader('Accept', 'application/json');
    redditRequest.setRequestHeader('Content-Type', 'application/json');

    let urlTextBox = document.querySelector('.submitPage .url input');
    let titleTextBox = document.querySelector('.submitPage .titleOfPost input');
    let checkBox = document.querySelector('.submitPage .options .checkbox input');
    let submitButton = document.querySelector('.submitPage .submitButton button');

    submitButton.addEventListener('click', function() {
        redditRequest.send(JSON.stringify({
            "title": titleTextBox.value,
            "href": urlTextBox.value,
        }))
    })
}

submitPost.addEventListener('click', function() {
    createNewPostloadPage();
})