const loadingpage = document.querySelector('#loadingpage');

//Button
const likebtn = document.querySelector('#likebtn');
const unlikebtn = document.querySelector('#unlikebtn');
const lovebtn = document.querySelector('#lovebtn');

//All <h> Tag
const liketext = document.querySelector('#liketext');
const unliketext = document.querySelector('#unliketext');
const lovetext = document.querySelector('#lovetext');

const buttonforleftside = document.querySelector('.buttonforleftside');
const buttonsection = document.querySelector('.buttonsection');
const buttonforrightside = document.querySelector('.buttonforrightside');

let likebtncount = 0;
let unlikebtncount = 0;
let lovebtncount = 0;

let count = 0;

//This Function For , Handle Loading Process
window.addEventListener('load', function() {
    setTimeout(function() {
        loadingpage.style.opacity = '0';
        setTimeout(function() {
            loadingpage.style.display = 'none';
        }, 2000); 
        console.log('Window is fully loaded');
    }, 700);
});

//This Function For after click the Like Button incremant Like txt
likebtn.addEventListener('click', function(){
    let temp = parseInt(liketext.innerText);

    console.log(likebtncount);
    if(likebtncount === 0){
        liketext.innerText = (temp+1);
    }else if(likebtncount === 1){
        liketext.innerText = (temp-1);
    }
    
    likebtncount = parseInt(likebtncount+1);
    if(likebtncount>1){
        likebtncount = 0;
    }
    console.log(likebtncount);
});

//This Function For after click the Unlike Button incremant Unlike txt
unlikebtn.addEventListener('click', function(){
    let temp = parseInt(unliketext.innerText);

    console.log(unlikebtncount);
    if(unlikebtncount === 0){
        unliketext.innerText = (temp+1);
    }else if(unlikebtncount === 1){
        unliketext.innerText = (temp-1);
    }
    
    unlikebtncount = parseInt(unlikebtncount+1);
    if(unlikebtncount>1){
        unlikebtncount = 0;
    }
});

//This Function For after click the Love Button incremant Love txt
lovebtn.addEventListener('click', function(){
    let temp = parseInt(lovetext.innerText);
    
    console.log(lovebtncount);
    if(lovebtncount === 0){
        lovetext.innerText = (temp+1);
    }else if(lovebtncount === 1){
        lovetext.innerText = (temp-1);
    }
    
    lovebtncount = parseInt(lovebtncount+1);
    if(lovebtncount>1){
        lovebtncount = 0;
    }
});

buttonforleftside.addEventListener('click',function(){
    buttonsection.style.transitionDuration = '1s';
    console.log('buttonsection');
    if(count===0){
        buttonsection.style.left = -95+'%';
    }else if(count===1){
        buttonsection.style.left = (-95*2.07)+'%';
    }
    
    if(count>=2){
    }else{
        count++;
    }
    console.log(count);
});

buttonforrightside.addEventListener('click',function(){
    console.log('buttonsection');
    if(count===2){
        buttonsection.style.left = -95+'%';
    }else if(count===1){
        buttonsection.style.left = 0+'%';
    }

    if(count<=0){
    }else{
        count--;
    }
    console.log(count);
});
