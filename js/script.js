/*=============================================
SLIDESHOW OBJECTS PROPERTIES
=============================================*/

var p = {

    pagination: document.querySelectorAll('.slide__pages li'),
    slideBox : document.querySelector('.slide__group'),
    arrowLeft: document.getElementById('arrow-left'),
    arrowRight: document.getElementById('arrow-right'),
    imgSlide: document.querySelectorAll('.slide__group li'),
    timeSlide:2000,
    resetSlide: false,
    itemP : 0
}

var m = {
    
    startSlide : ()=>{

        p.pagination.forEach((item)=>{
            item.addEventListener('click',()=>{
                p.itemP = item.getAttribute('item')-1;
                m.slideMove(p.itemP);
            })
        })

        p.arrowLeft.addEventListener('click',m.slideLeft);
        p.arrowRight.addEventListener('click',m.slideRight);

        m.automaticSlide();

        p.slideBox.style.width = (p.pagination.length*100)+'%';
        p.imgSlide.forEach((image)=>{
            image.style.width = (100/p.pagination.length)+'%';
        })

        console.log(p.imgSlide);

    },

    slideRight : ()=>{
        if(p.itemP<p.pagination.length-1 ) p.itemP++;
        else p.itemP = 0;
        m.slideMove(p.itemP);
    },

    slideLeft : ()=>{
        if(p.itemP==0 ) p.itemP = p.pagination.length-1;
        else p.itemP--;
        m.slideMove(p.itemP);
    },

    slideMove : (item)=>{
        p.resetSlide = true;
        p.slideBox.style.left = item*(-100)+'%';

        p.pagination.forEach(function(item){
            item.style.opacity = .5;
        })

        p.pagination[item].style.opacity = 1;
        p.slideBox.style.transition = ".7s left ease-in-out";
    },

    automaticSlide : ()=>{
        setInterval(()=>{
            if(p.resetSlide){
                p.resetSlide = false;
            }else{
                m.slideRight();
            }
        },p.timeSlide);
    } 

}

m.startSlide();