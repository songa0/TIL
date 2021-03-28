const windowScreen = document.querySelector('#windowScreen'),
      windowOuter = document.querySelector("#windowOuter"),
      windowInner = document.querySelector("#windowInner"),
      documentClient = document.querySelector("#documentClient");

function reportWindowSize(){
    windowScreen.textContent = `${screen.width}, ${screen.height}`;
    windowOuter.textContent = `${window.outerWidth}, ${window.outerHeight}`;
    windowInner.textContent = `${window.innerWidth}, ${window.innerHeight}`;
    documentClient.textContent = `${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
}

window.onresize = reportWindowSize;
window.onload = reportWindowSize;