---
layout: 27conference-hub
permalink: /conference/MSA2027/test
masthead: false
footer: false
---

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>

<style>

body {
  margin: 0;
  overflow: hidden;
  height: 100vh;
  background: #111111;
  position: relative;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: twinkle 2s infinite ease-in-out;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.3; }
}

h1 {
    color: green;
        }
		
img {
    position: absolute;
}

.scroll-image {
}

.test {
	display: flex;
	width: 100%;
	align-items: center;
	color: white;
	font-family: "Sansita", sans-serif;
	font-size: 2em;
	font-weight: 900;
	line-height: 75%;
	font-style: normal;
	color: white;
}

.expanded {
	font-family: "Sansita", sans-serif;
	font-size: 3em;
	font-weight: 900;
	line-height: 75%;
	font-style: normal;
	color: #F14347;
}

.page-link-1 {
	position: relative;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.page-link-2 {
	position: relative;
	bottom: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.page-link-3 {
	position: relative;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.page-link-4 {
	position: relative;
	bottom: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.page-link-5 {
	position: relative;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.page-link-6 {
	position: relative;
	bottom: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.page-link-7 {
	position: relative;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.page-link-8 {
	position: relative;
	bottom: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
}


</style>


<body>

<p></p>
    <div class="expanded">
		<span style="color: #F14347">M</span>
		<span style="color: #029AD4">S</span>
		<span style="color: #FECE0E">A</span>
		<span style="color: white">2027</span>
		<br />
		<span style="color: #F14347; font-size: .75em;">MODERNISM, EXPANDED UNIVERSE</span>
		<br />
		<span style= "color: white; font-size: .75em;">TALLAHASSEE, FLORIDA</span>
		<br />
	</div>
<p></p>


    <div id="scroll-image">
		<div class="test">
			<img src="/conference/MSA2027/assets/expand_black_1.jpg" />
			<!--
			<div class="page-link-1">Welcome</div>
			<div class="page-link-2">CFP</div>
			-->
		</div>
			 
		<div class="test">
			<img src="/conference/MSA2027/assets/expand_black_2.jpg" />
			<!--
			<div class="page-link-3">Seminars</div>
			<div class="page-link-4">Workshops</div>
			-->
		</div>

		<div class="test">
			<img src="/conference/MSA2027/assets/expand_black_3.jpg" />
			<!--
			<div class="page-link-5">Travel</div>
			<div class="page-link-6">Events</div>
			-->
		</div>
		
		<div class="test">
			<img src="/conference/MSA2027/assets/expand_black_4.jpg" />
			<!--
			<div class="page-link-7">Registration</div>
			<div class="page-link-8">Program</div>
			-->
		</div>
			 
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


// Function to create multiple stars
function createStars() {
  const numberOfStars = 100; // Adjust for more or fewer stars
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random size, position, and animation duration for each star
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;

    document.body.appendChild(star);
  }
}

createStars();

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
