const body = document.querySelector("body");
const IMAGE_NUM = 5;
function loadImage(randomNum){
    const img = new Image();
    img.src = `./images/${randomNum+1}.jpg`;
    img.classList.add('bgImage');
    body.appendChild(img);
}

function generateRandomNum(num){
    return Math.floor(Math.random() * num);

}

function init(){
    loadImage(generateRandomNum(IMAGE_NUM));
    
};

init();