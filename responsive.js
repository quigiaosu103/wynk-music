
const expectedHiegh= $('.main-layer__main-poster')
const imageElement= $('.main-poster__photo')
const artistImgElement= $$('.artist-img');
var clientWidth= imageElement.clientWidth;
var artistImgWidth= artistImgElement[0].clientWidth;
var screenWith= $('.heading').clientWidth;
const signupBtn= $('.recommend-song-view__option__not-member');
const heading= $('.heading');

setHeight(clientWidth,artistImgWidth);

function setHeight(clientWidth,artistImgWidth){
    expectedHiegh.style.height= `${clientWidth}px`
     for(var i=0; i<artistImgElement.length; i++) {
                artistImgElement[i].style.height= `${artistImgWidth}px`;
            }

}

document.getElementsByTagName("BODY")[0].onresize= function() {
    screenWith= heading.clientWidth;
    clientWidth= imageElement.clientWidth;
    if(screenWith<=628){
        console.log(screenWith, clientWidth)
        setHeight(clientWidth,artistImgWidth)
        artistImgWidth= artistImgElement[0].clientWidth;
        
        signupBtn.innerHTML= "Sign in";
    }else{
        signupBtn.innerHTML= "Don't have account?";
    }
}




