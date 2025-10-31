---
layout: 26conference-hub
permalink: /conference/MSA2026/test/
masthead: false
footer: false
---



<html>
<head>
    <style>
        body {
    text-align: center;
}
h1 {
    color: green;
        }
img {
    position: absolute;
    left: 400px;
}
    </style>
</head>

<body>

    <div id="scroll-image">
        <img src=
"/conference/MSA2026/assets/tarot_priestess.png" 
             class="test" onclick="changeImage()"/>
        <img src=
"/conference/MSA2026/assets/tarot_hermit.png" 
             class="test" />


<script>
                 changeImage();
function changeImage() {
	*/set opacity of images to 1/*
    let images = document.getElementsByClassName("test");
    for (let i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    let top = 1;
    let cur = images.length - 1;

	*/sets Timeout to change image after 3 sec /*
    setTimeout(changeImage, 3000);

	*/adjust z-index and uses transition to decrease opacity/*
    async function changeImage() {

        let nextImage = (1 + cur) % images.length;

        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;

        
        await transition();
		*/z-index of current top /*
        images[cur].style.zIndex = top;
		*/changes z-index of next to top + 1/*
        images[nextImage].style.zIndex = top + 1;

        top = top + 1;
        images[cur].style.opacity = 1;
        cur = nextImage;
    }
    function transition() {
        return new Promise(function (resolve, reject) {
            let del = 0.01;
            let id = setInterval(changeOpacity, 10);
            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }
        })
    }
}

             </script>
    </div>
</body>
</html>


<!--

<html>
<head>
    <style>
        body {
    text-align: center;
}
h1 {
    color: green;
        }
img {
    position: absolute;
    left: 400px;
}
    </style>
</head>
<body>



    <div id="scroll-image">
        <img src=
"/conference/MSA2026/assets/tarot_priestess.png" 
             class="test" onclick="changeImage()"/>
        <img src=
"/conference/MSA2026/assets/tarot_hermit.png" 
             class="test" />


<script>
                 changeImage();
function changeImage() {
	*/set opacity of images to 1/*
    let images = document.getElementsByClassName("test");
    for (let i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

	*/sets interval to change image every 3 sec /*
    let top = 1;
    let cur = images.length - 1;
    setInterval(changeImage, 3000);

	*/adjust z-index and uses transition to decrease opacity/*
    async function changeImage() {

        let nextImage = (1 + cur) % images.length;

        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;

        
        await transition();
		*/z-index of current top /*
        images[cur].style.zIndex = top;
		*/changes z-index of next to top + 1/*
        images[nextImage].style.zIndex = top + 1;

        top = top + 1;
        images[cur].style.opacity = 1;
        cur = nextImage;
    }
    function transition() {
        return new Promise(function (resolve, reject) {
            let del = 0.01;
            let id = setInterval(changeOpacity, 10);
            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }
        })
    }
}

             </script>
    </div>
</body>
</html>

-->
































<!--

<p>
    <img alt="" src="/conference/MSA2026/assets/tarot_priestess.png" 
        style="" id="imgClickAndChange" onclick="changeImage()"/>
</p>


<p>
    <img alt="" src="/conference/MSA2026/assets/tarot_priestess.png" 
        style="" id="imgClickAndChange" onclick="flipImage()"/>
</p>

	
<script>

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "/conference/MSA2026/assets/tarot_priestess.png"){
        document.getElementById("imgClickAndChange").src = "/conference/MSA2026/assets/hermit.png";
    } else {
        document.getElementById("imgClickAndChange").src = "/conference/MSA2026/assets/tarot_priestess.png";
    }
}

function flipImage() {
    if (document.getElementById("imgClickAndChange").src == "/conference/MSA2026/assets/tarot_priestess.png"){
        document.getElementById("imgClickAndChange").src = "/conference/MSA2026/assets/hermit.png";
    } else {
        document.getElementById("imgClickAndChange").src = "/conference/MSA2026/assets/tarot_priestess.png";
    }
}


</script>

-->