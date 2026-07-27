---
layout: 27conference-hub
permalink: /conference/MSA2027/test1/
masthead: false
footer: false
---

<head>

<link href="https://fonts.cdnfonts.com/css/kabel" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>

@import url('https://fonts.cdnfonts.com/css/kabel');

body {
  font-family: 'Kabel', Arial, sans-serif;
  margin: 0;
  overflow: hidden;
  height: 100vh;
  background: #111111;
  position: relative;
}

a {
color: white;
}

a:visited {
color: white;
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

* {box-sizing: border-box;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 500px;
  position: relative;
  margin: auto;
}

.expanded {
	text-align: center;
	font-family: 'Kabel', sans-serif;
	font-size: 2em;
	font-weight: 900;
	line-height: 75%;
	font-style: normal;
	color: #F14347;
}

/* Caption text */
.text-high {
  color: white;
  font-size: 20px;
  font-style: italic;
  padding: 8px 12px;
  position: absolute;
  left: 10%;
  bottom: 72%;
  width: 55%;
  text-align: center;
}

/* Caption text */
.text-low {
  color: white;
  font-size: 20px;
  font-style: italic;
  padding: 8px 12px;
  position: absolute;
  bottom: 15%;
  left: 45%;
  width: 55%;
  text-align: center;
}

.active {
  background-color: #717171;
}

/* Fading animation */
@keyframes fadeInHold {
     0%, 100% { opacity: 0; }
	 20%, 80% { opacity: 1; }
}
.fade-in-hold {
     animation: fadeInHold 3s ease-in forwards; /* Adjust duration as needed */
}


/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>
</head>


<body>

<p></p>
    <div class="expanded">
		<span style="color: #F14347">M</span><span style="color: #029AD4">S</span><span style="color: #FECE0E">A</span>
		<span style="color: white">2027</span>
		<br />
		<span style="color: #F14347; font-size: .75em;">MODERNISM, EXPANDED UNIVERSE</span>
		<br />
		<span style= "color: white; font-size: .75em;">TALLAHASSEE, FLORIDA</span>
		<br />
	</div>
<p></p>

<div class="slideshow-container">

<div class="mySlides fade-in-hold">
  <img src="/conference/MSA2027/assets/expand_black_narrow_1.jpg" style="width:100%">
  <div class="text-high">Modernism... Expanded</div>
  <div class="text-low"><a href="https://www.moderniststudies.org/">Call for Papers</a></div>
</div>

<div class="mySlides fade-in-hold">
  <img src="/conference/MSA2027/assets/expand_black_narrow_2.jpg" style="width:100%">
  <div class="text-high">Seminars</div>
  <div class="text-low">Workshops</div>
</div>

<div class="mySlides fade-in-hold">
  <img src="/conference/MSA2027/assets/expand_black_narrow_3.jpg" style="width:100%">
  <div class="text-high">Travel</div>
  <div class="text-low">Events</div>
</div>

<div class="mySlides fade-in-hold">
  <img src="/conference/MSA2027/assets/expand_black_narrow_4.jpg" style="width:100%">
  <div class="text-high">Registration</div>
  <div class="text-low">Program</div>
</div>

</div>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>

<script>
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
   

// Function to create multiple stars
function createStars() {
  const numberOfStars = 200; // Adjust for more or fewer stars
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

