// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.

// Creo array con object
const listPosts = [
    {
        nomeAutore: 'Phil Magione',
        fotoProfilo: 'https://picsum.photos/id/1/300/300',
        data: '4 mesi fa',
        testoDelPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio     minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil     ullam aut alias.',
        immagine:'https://picsum.photos/id/11/600/300',
        numeroDiLike: 80,
    },
    {
        nomeAutore: 'Walter White',
        fotoProfilo: 'https://picsum.photos/id/2/300/300',
        data: '8 mesi fa',
        testoDelPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine:'https://picsum.photos/id/10/600/300',
        numeroDiLike: 77,
    },
    {
        nomeAutore: 'Jessie Pinkman',
        fotoProfilo: 'https://picsum.photos/id/3/300/300',
        data: '1 mese fa',
        testoDelPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine:'https://picsum.photos/id/9/600/300',
        numeroDiLike: 24,
    },
    {
        nomeAutore: 'Tommy Shelby',
        fotoProfilo: 'https://picsum.photos/id/4/300/300',
        data: '10 mesi fa',
        testoDelPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine:'https://picsum.photos/id/8/600/300',
        numeroDiLike: 227,
    },
    {
        nomeAutore: 'Jax Teller',
        fotoProfilo: 'https://picsum.photos/id/5/300/300',
        data: '7 ore fa',
        testoDelPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine:'https://picsum.photos/id/7/600/300',
        numeroDiLike: 510,
}]

// Ref post contaiener
const postsContainer = document.getElementById('container');

// Creo i post con richiamo della funzione
genPosts(listPosts, postsContainer);


/*
 * Function
 */

// Con ciclo 'for/in'
function genPosts (array, container) {
    for (let key in array) {
        const card = array[key];
        container.innerHTML += `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${card.fotoProfilo}" alt="${card.nomeAutore}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${card.nomeAutore}</div>
                    <div class="post-meta__time">${card.data}</div>
                </div>             
            </div>
        </div>
        <div class="post__text">${card.testoDelPost}</div>
        <div class="post__image">
            <img src="${card.immagine}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#"data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up"aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${card.numeroDiLike}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
    }
}