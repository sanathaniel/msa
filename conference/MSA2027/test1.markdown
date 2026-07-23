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

* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text-high {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  left: 40%;
  bottom: 80%;
  width: 100%;
  text-align: center;
}

/* Caption text */
.text-low {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 20%;
  left: 60%;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
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

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="/conference/MSA2027/assets/expand_black_narrow_1.jpg" style="width:100%">
  <div class="text-high">Caption One</div>
  <div class="text-low">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="/conference/MSA2027/assets/expand_black_narrow_2.jpg" style="width:100%">
  <div class="text-high">Caption One</div>
  <div class="text-low">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="/conference/MSA2027/assets/expand_black_narrow_3.jpg" style="width:100%">
  <div class="text-high">Caption One</div>
  <div class="text-low">Caption Two</div>
</div>

</div>
<br>



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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
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

