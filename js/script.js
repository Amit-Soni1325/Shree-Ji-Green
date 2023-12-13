const toggleBtn = document.querySelector(".hm-cnt")
const navlink = document.querySelector(".navdiv")

toggleBtn.addEventListener("click", ()=> {
    navlink.classList.toggle('active');
})


const slides = document.querySelectorAll(".slide");
let counter = 0;


slides.forEach(
    (slide, index) => {
        slide.style.left = `${index*100}%`;
    }
)

const goNext = () => {
    counter++;
    slideImage();
}

const goPrev = () => {
    counter--;
    slideImage();
} 

const slideImage = ()=> {
    if(counter > 3) {
        counter = 0;
    }
    else if(counter < 0) {
        counter = 3;
    }
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

function autoSlide() {
    setInterval(goNext, 2500); // 2000 milliseconds = 2 seconds
}

window.onload = autoSlide;