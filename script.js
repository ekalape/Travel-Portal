const d = 3;
const centralImg = 2;

const select = s => document.querySelector(s);
const selectAll = s => document.querySelectorAll(s);

/* const destinationImg = d => `<img class="slider__item" src="assets/dest/dest${d}.png" alt="Destination image">`; */
const destinationImg = d => {
    const img = document.createElement("img");
    img.classList.add("slider__item");
    img.alt = "Destination image";
    img.src = `assets/dest/dest${d}.png`
    return img;
};

const dot = d => {
    const item = document.createElement("div");
    item.classList.add("dot");
    item.dataset.img = d;
    if (d === centralImg) item.classList.add("checked");
    else item.addEventListener("click", changeSlide)
    return item;
}

const wrapper = select(".slider-wrapper");
const dotContainer = select(".controls");
const btnForward = select(".forward");
const btnBack = select(".back");

function createSlides() {
    for (let i = 0; i < 3; i++) {
        wrapper.append(destinationImg(i + 1));
        dotContainer.append(dot(i + 1));
    }

}

createSlides();

function changeSlide(event) {
    console.log(event.target.dataset.img);
}