function autoColor() {
    
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);
    
    document.body.style.background = `rgb(${color1}, ${color2}, ${color3})`;
    span.textContent = `rgb(${color1}, ${color2}, ${color3})`;
    
}

setInterval(autoColor, 2000);