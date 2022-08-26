
const expectedHiegh= $('.main-layer__main-poster')
const imageElement= $('.main-poster__photo')
const artistImgElement= $$('.artist-img');
const clientWidth= imageElement.clientWidth;
const artistImgWidth= artistImgElement[0].clientWidth;

expectedHiegh.style.height= `${clientWidth}px`

console.log(artistImgElement.length)
for(var i=0; i<artistImgElement.length; i++) {
    artistImgElement[i].style.height= `${artistImgWidth}px`;
}
artistImgElement.style.height= `${artistImgWidth}px`;