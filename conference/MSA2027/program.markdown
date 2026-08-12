---
layout: 27conference
permalink: /conference/MSA2027/program/
sidebar:
  - title: ""
    image: conference/MSA2027/assets/thumbnail.jpg
  - nav: conf_nav_27
masthead: false
footer: false
---

<head>

<link href="https://fonts.cdnfonts.com/css/kabel" rel="stylesheet">


<style>

@import url('https://fonts.cdnfonts.com/css/kabel');

body {
  font-family: 'Kabel', Arial, sans-serif;
  color: white;
  margin: 0;
  overflow: hidden;
  height: 100vh;
  background: #111111;
  position: relative;


	a {
color: #FECE0E;
}

	a:visited {
color: #FECE0E;
}

	h1 {
color: #F14347;
}

	h2 {
color: #F14347;
padding-bottom: 0px;
}

	h3 {
color: #029AD4;
}
  
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



<div class="page__hero--overlay" 
  style="background-color: #000; color: 1e6cb6; box-shadow: 0 0 8px 8px black inset; background-image: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/conference/MSA2027/assets/postcard.jpg);">
    <div class="wrapper">
	  <h1 id="page-title" class="page__title" itemprop="headline" style="color: #F14347; text-shadow: 4px 4px 4px rgb(0, 0, 0);">      
		  Program       
	  </h1> 
	</div>
</div>

<h2><a href="/conference/MSA2026/assets/BAMS_MSA_2026_In_Person_Schedule.pdf">In-Person Schedule</a></h2>

<h2><a href="/conference/MSA2026/assets/BAMS_MSA_2026_In_Person_Schedule_Small.pdf">(Smaller file size) In-Person Schedule</a></h2>

<h2><a href="/conference/MSA2026/assets/BAMS_MSA_2026_Virtual_Schedule.pdf">Virtual Schedule</a></h2>



For late adjustments to the conference programs, <a href="https://docs.google.com/document/d/1xUL8h9xp-mWJFtXBmTv_tKvb6_U8tH6ZroWiReLmB60/edit?usp=sharing">please see our addendum</a>.
 
<!--
<h2>Sharing Accessible Presentation Materials</h2>

BAMS/MSA 2026 presenters are asked to <a href="/conference/MSA2026/access/">upload a digital copy of their remarks</a> prior to the beginning of their session(s). These digital files are not intended for any use other than to expand accessibility during the conference. Presenters are urged to consider our <a href="https://drive.google.com/drive/u/2/folders/1kDbIgEkVTBZpt2g5NObOdWtleCgUznnA">accessible presentation guide</a> as they develop their materials.

<i>These conference accessibility files should not be reproduced, shared, or distributed by anyone other than their original authors, who retain all rights and ownership of these materials. At the end of each day of the conference, the files for completed sessions will be automatically deleted from Google Drive and all links disabled.</i>
-->

<!--
<p>
Please note that this is a draft program. Between now and May 1, please feel free to report basic errors of fact (e.g., typos, updated institutional affiliations, incorrect paper titles), and we will correct those in the program after May 1. We will also accept schedule change requests <i>only in cases of emergency</i> (e.g., medical emergency), until May 1, and will review those requests after May 1. Due to the complexities of the schedule, we cannot promise that all requests will be accepted. All requests should be sent to the conference email: <a href="mailto:bamsmsa26@gmail.com">bamsmsa26@gmail.com</a>.
</p> 
-->


<script>

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