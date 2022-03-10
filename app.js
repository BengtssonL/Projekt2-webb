let galleryImages = document.querySelectorAll(".gallery")
let getLatestOpenedImg; 
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("img");
           
            getLatestOpenedImg = index;

            let container = document.body;

            let newImgWindow = document.createElement("div");

            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "Closeimg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg)
        }
    });
}

