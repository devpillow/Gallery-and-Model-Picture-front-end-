//  -------- -------- ---- Dark Mode ---- -------- --------
function toggledarkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
//  -------- -------- ---- Dark Mode ---- -------- --------

//  -------- -------- ---- Model Picture ---- -------- --------

image_in_grid = document.getElementsByClassName('ingrid')
bg = document.getElementById('bg_model')
img = document.getElementById("show_img")
model = document.getElementById("show_model")
caption = document.getElementById("caption")
console.log(image_in_grid)
for (let i = 0; i < image_in_grid.length; i++) {
    image_in_grid[i].addEventListener("click", function () {
        model.style.display= "block"
        img.src=this.src
        caption.innerHTML=this.alt
        bg.style.display= "block"
        setTimeout(() => {
            caption.style.opacity = 1
            bg.style.opacity = 0.72
            
        },1);
        console.log("Clicked image")
    })
}

function close_model() {
    model.style.display= "none"
    bg.style.opacity = 0
    setTimeout(() => {
        bg.style.display="none"
    },301);
}
//  -------- -------- ---- Model Picture ---- -------- --------