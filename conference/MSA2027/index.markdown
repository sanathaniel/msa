---
layout: 27conference-hub
permalink: /conference/MSA2027/test
masthead: false
footer: false
---


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
}
    </style>
</head>
<body>
    <h1>MSA2027</h1>
    <b>Modernism, Expanded Universe</b>

	
    <div id="scroll-image">
        <img src=
"/conference/MSA2027/assets/expand_1.jpg" 
             class="test" />
        <img src=
"/conference/MSA2027/assets/expand_2.jpg"
             class="test" />
        <img src=
"/conference/MSA2027/assets/expand_3.jpg"
             class="test" />
        <img src=
"/conference/MSA2027/assets/expand_4.jpg" 
             class="test" />
			 
<script>
                 startImageTransition();
function startImageTransition() {
    let images = document.getElementsByClassName("test");
    for (let i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    let top = 1;
    let cur = images.length - 1;
    setInterval(changeImage, 4000);

    async function changeImage() {

        let nextImage = (1 + cur) % images.length;

        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;

        
        await transition();

        images[cur].style.zIndex = top;
        images[nextImage].style.zIndex = top + 1;

        top = top + 1;
        images[cur].style.opacity = 1;
        cur = nextImage;
    }
    function transition() {
        return new Promise(function (resolve, reject) {
            let del = 0.01;
            let id = setInterval(changeOpacity, 20);
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



<!--
 
<style>

body {
	background-color: #D6D1CE;
	font-style: Sansita;
	color: black;
	a:link {
		color: black;
	}
	a:visited {
		color: black;
	}
}

	h1 {
color: #689c4b;
}

 
	h2 {
color: #689c4b;
padding-bottom: 0px;
margin: .25em 0 .25em; 
}

	h3 {
color: #689c4b;
}
 
img {
    width: 190px;
	position: relative;
 }
 

.container {
	position: relative;
	top: 5px;
	align-content: center;
	padding: 0px 0px 0px 0px;
	margin: 10px 10px 50px 10px;
	width: 190px;
	height: 350px;
}

.all-cards {
	display: inline-flex;
    max-width: 725px;
    flex-direction: row;
    flex-wrap: wrap;
}

.title-box {
	text-align: center;
}

</style>

<h1>Modernism, Expanded Universe
</h1>
<h2>
Presented by MSA<br>
Tallahassee, FL, December, 2027
</h2>
 
<div class="main-wrapper">
	<div class="feature__wrapper" style="display: contents;">
		<div class="all-cards">
			<div class="container">
				<div class="title-box"><h2 style="padding-bottom: 0px;">Welcome</h2></div>
				<img src="/conference/MSA2027/assets/expand_1.jpg" id="bottom1" style="width:0%">
				<img src="/conference/MSA2027/assets/expand_2.jpg" id="top1" style="top: 0px;" onclick="fadeOut1()">
			</div>
		</div>	
	</div>	
</div>		
<!--
	
			<div class="container">
				<div class="title-box"><h2 style="padding-bottom: 0px;">Program</h2></div>
				<a href="/conference/MSA2026/program/">
						<img src="/conference/MSA2026/assets/back_program.jpg" id="bottom8" style="width:0%">
				</a>
				<img src="/conference/MSA2026/assets/tarot_priestess.png" id="top8" style="top: 0px;" onclick="fadeOut8()">
			</div>	

		
			
-->

<!--

<p></p>

<hr>

<div style="font-size: .5rem;">
	Images drawn from Josef Albers's <i>Despite Straight Lines</i> (1961)
</div>


<script>

function fadeOut() {
	function disappear(){
        bottom.style.zIndex = 2;
      }   
    function delay(){  
        const bottom = document.getElementById('bottom');
      	bottom.classList.add('flip-bottom'); 
      }
    const top = document.getElementById('top');
    top.classList.add('flip-top');
  }


</script> 
-->
