const body = document.querySelector("body")
let color1 = ""
let color2 = ""
let color3 = ""

const autoColor = (color1, color2, color3) => {
    
    color1 = Math.floor(Math.random() * 255);
    color2 = Math.floor(Math.random() * 255);
    color3 = Math.floor(Math.random() * 255);
    
    body.style.background = `rgb(${color1}, ${color2}, ${color3})`;
    span.textContent = `rgb(${color1}, ${color2}, ${color3})`;
    
}

setInterval(() => {
    autoColor()
}, 2000);