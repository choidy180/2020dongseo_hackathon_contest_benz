const second_bg = document.getElementById('second_bg_img');

getTime = () => {
    const date = new Date();
    const hours = date.getHours();
}


changeBGImg = () => {
    const date = new Date();
    const hours = date.getHours();
    const Minutes = date.getSeconds();
    if(hours < 19 || hours > 4){
        document.getElementById("second_bg_img").style.backgroundImage="url(park.jpg)"
    }
    if(hours > 19 || hours < 5){
        document.getElementById("second_bg_img").style.backgroundImage="url(park_night.jpg)"
    }
}

init = () => {
    getTime();
    changeBGImg();
    setInterval(changeBGImg, 120000);
}

init();