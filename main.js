const bg = document.querySelector('.bg-img')
const perText = document.querySelector('.loading-text')

let int = 0;

let load = setInterval(blurring, 30)

function blurring() {
    int++
    if(int > 99){
        clearInterval(load)
    }

    perText.innerText = `${int}%` ;
    perText.style.opacity = scale(int, 0, 100, 1, 0)
    bg.style.opacity = scale(int, 0, 100, 0.5, 1)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }