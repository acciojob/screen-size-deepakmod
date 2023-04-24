//your JS code here. If required.
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;
        let myHeight = window.innerHeight;
        let sizeInfo=document.getElementById("sizeInfo");
        sizeInfo.innerText="Width: "+myWidth+" and "+"Height: "+myHeight;
    }