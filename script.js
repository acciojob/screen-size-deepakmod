//your JS code here. If required.
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;
        let myHeight = window.innerHeight;
        let size=document.getElementById("size");
        size.innerText="Width: "+myWidth+"px "+"Height: "+myHeight+"px"
    }