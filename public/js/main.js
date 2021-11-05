/*
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
*/

// DOM nodes
const postContainer = document.getElementById('container');

// data to render
const socialPosts = [
    {
        autore: 'Phil Mangione'
    },
    {
        autore: 'Antony Laddaga'
    },
    {
        autore: 'Phil Anselmo'
    },
    {
        autore: 'Kirk Hammett'
    },
    {
        autore: 'Pantera'
    },
    {
        autore: 'Lamb of God'
    }
];

// creates and renders dinamic objects
for (let i = 0; i < socialPosts.length; i++) {
    let numberProfilePicture = Math.floor(Math.random() * 200) + 1;
    let numberPostPicture = Math.floor(Math.random() * 200) + 1;
    let numberData = Math.floor(Math.random() * 12) + 1;
    let numberLikes = Math.floor(Math.random() * 100) + 1;

    let socialUser = socialPosts[i];

    socialUser.profilePicture = `https://unsplash.it/300/300?image=${numberProfilePicture}`;

    socialUser.data = `${numberData} mesi fa`;

    socialUser.testo = `Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`;

    socialUser.likes = numberLikes;

    if (i < socialPosts.length - 2) {
        socialUser.immagine = `https://unsplash.it/600/300?image=${numberPostPicture}`;
        renderObj(socialUser);
    } else {
        socialUser.immagine = '';
        renderObjNoImage(socialUser);
    }
}

// gets DOM elements just created
const likeButtons = document.getElementsByClassName('like-button'); // like buttons
const likeCounters = document.getElementsByClassName('js-likes-counter'); // like counters

// adds click event on each like button
for (let i = 0; i < socialPosts.length; i++) {
    likeButtons[i].addEventListener('click', function() {
        console.log('mi hai cliccato');
        socialPosts[i].likes += 1;
        likeCounters[i].innerText = socialPosts[i].likes;

        console.log(socialPosts[i]);
    })
}

// renders object with image
function renderObj(obj) {
    postContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${obj.profilePicture}" alt="${obj.autore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${obj.autore}</div>
                        <div class="post-meta__time">${obj.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${obj.testo}</div>
            <div class="post__image">
                <img src="${obj.immagine}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${obj.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
};

// renders object without image
function renderObjNoImage(obj) {
    postContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${obj.profilePicture}" alt="${obj.autore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${obj.autore}</div>
                        <div class="post-meta__time">${obj.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${obj.testo}</div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${obj.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
}