---
layout: 27conference
permalink: /conference/MSA2027/access/
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
  height: 100vh;
  background: #111111;
  position: relative;
}

	a {
color: #FECE0E;
}

	a:visited {
color: #FECE0E;
}

	h1 {
	color: #F14347;
	font-family: 'Kabel', sans-serif;
	font-size: 2em;
	font-weight: 900;
}

	h2 {
	color: #F14347;
	font-family: 'Kabel', sans-serif;
	font-size: 2em;
	font-weight: 900;
}

	h3 {
	color: #F14347;
	font-family: 'Kabel', sans-serif;
	font-size: 2em;
	font-weight: 900;
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
		  Accessibility       
	  </h1> 
	</div>
</div>

<h1>Sharing Accessible Presentation Materials</h1>

BAMS/MSA 2026 presenters are asked to upload a digital copy of their remarks prior to the beginning of their session(s). These digital files are not intended for any use other than to expand accessibility during the conference. 

<h2>Uploading Materials as a Presenter</h2>

<ul>
	<li>Save your document in either PDF or .DOCX format (max size 4mb). Include your surname(s) as the first part of your filename, e.g. “Smith MSA23 Paper.pdf”.</li> 
	<li>Visit the <a href="https://drive.google.com/drive/folders/1kDbIgEkVTBZpt2g5NObOdWtleCgUznnA?usp=sharing">BAMS/MSA 2026 Accessibility folder on Google Drive</a>.</li>
	<li>Browse to the folder for your presentation and open it. Select the “+ New” button on the top left, then select “File Upload.” Browse to your locally saved PDF or .DOCX file, and click “Open” to upload.</li>  
	<li>Once your file is uploaded, you should see it in the corresponding folder.
	Confirm that your file is fully shared by clicking the vertical ellipsis icon (⋮). It is important that you <strong>do not adjust the access settings of any folder.</strong> This will prevent other participants from uploading their access copies.</li>  
<!--
and opening the “Share” menu. Under “General Access,” select “anyone with the link” and “viewer” then “Done” to save the settings. 
-->
	
	<li>If you are participating in multiple sessions, you should repeat steps 2-3 for each separate session.</li>
</ul> 

<h2>Accessing Materials During the Conference</h2>

Visit the <a href="https://drive.google.com/drive/folders/1kDbIgEkVTBZpt2g5NObOdWtleCgUznnA?usp=sharing">BAMS/MSA 2026 Accessibility folder on Google Drive</a>. Session materials are organized by day, session number, and title 

These conference accessibility files should not be reproduced, shared, or distributed by anyone other than their original authors, who retain all rights and ownership of these materials. At the end of each day of the conference, the files for completed sessions will be automatically deleted from Google Drive and all links disabled. 
 

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