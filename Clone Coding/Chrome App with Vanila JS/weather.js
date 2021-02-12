const CUR_LOC = 'location';



function saveLoc(locationObj){
    localStorage.setItem(CUR_LOC, JSON.stringify(locationObj));
}

function successGetLoc(position){
    const coords = position.coords;
    const latitude = coords.latitude;
    const longitude = coords.longitude;

    const location = {
        latitude,
        longitude
    };

    saveLoc(location);
    
}

function errorGetLoc(){
    console.log('Cannot get the location');
}


function loadLocation(){
    const loadedLoc = localStorage.getItem(CUR_LOC);
    if(loadedLoc==null){
        navigator.geolocation.getCurrentPosition(successGetLoc,errorGetLoc);
    }else{
        console.log(JSON.parse(loadedLoc));
    }


}


function init(){
    loadLocation();
}

init();