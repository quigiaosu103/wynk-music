
const expectedHiegh= $('.main-layer__main-poster')
const imageElement= $('.main-poster__photo')
const artistImgElement= $$('.artist-img');
const clientWidth= imageElement.clientWidth;
const artistImgWidth= artistImgElement[0].clientWidth;
const screenWith= $('.heading').clientWidth;
const signupBtn= $('.recommend-song-view__option__not-member');

if(screenWith<=628){
    expectedHiegh.style.height= `${clientWidth}px`

    for(var i=0; i<artistImgElement.length; i++) {
        artistImgElement[i].style.height= `${artistImgWidth}px`;
    }
    artistImgElement.style.height= `${artistImgWidth}px`;
    signupBtn.innerHTML= "Sign in";
}
