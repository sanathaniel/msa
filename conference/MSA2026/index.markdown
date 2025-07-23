---
layout: 26conference-hub
permalink: /conference/MSA2026/
masthead: false
footer: false
---


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Disappear Animation</title>
  <style>
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    #tarot1 {
      width: 190px;
      height: auto;
    }
	
	#tarot2 {
      width: 190px;
      height: auto;
    }

	#tarot3 {
      width: 190px;
      height: auto;
    }

	#tarot4 {
      width: 190px;
      height: auto;
    }

	#tarot5 {
      width: 190px;
      height: auto;
    }

	#tarot6 {
      width: 190px;
      height: auto;
    }

	#tarot7 {
      width: 190px;
      height: auto;
    }

	#tarot8 {
      width: 190px;
      height: auto;
    }

	#tarot9 {
      width: 190px;
      height: auto;
    }

	#tarot10 {
      position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	#hiddenimage {
	  position: absolute;
	  top: 0px; /* Adjust position as needed */
	  left: 0px;
	  width: 190px;
	  height: auto;
	  z-index: 1;
	}
	
	
	.linkblock {
      width: 200px;
      height: 350px;
	}	
	
    .fade-out {
      animation: fadeOut 2s forwards;
    }
	
	.container {
		position: relative;
		width: 200px;
		height: 350px;
	}
	
	

  </style>
</head>

	

<body>

<h1>
Weird Modernisms 
</h1>

<img id="tarot1" src="assets/empress_full.jpg" alt="Sample Image" onclick="fadeOut1()">
<img id="tarot2" src="assets/tarot10.jpg" alt="Sample Image" onclick="fadeOut2()">
<img id="tarot3" src="assets/tarot11.jpg" alt="Sample Image" onclick="fadeOut3()">
<img id="tarot4" src="assets/tarot4.jpg" alt="Sample Image" onclick="fadeOut4()">
<img id="tarot5" src="assets/tarot5.jpg" alt="Sample Image" onclick="fadeOut5()">	
<img id="tarot6" src="assets/tarot6.jpg" alt="Sample Image" onclick="fadeOut6()">	
<img id="tarot7" src="assets/tarot7.jpg" alt="Sample Image" onclick="fadeOut7()">
<img id="tarot8" src="assets/tarot8.jpg" alt="Sample Image" onclick="fadeOut8()">	
<img id="tarot9" src="assets/tarot9.jpg" alt="Sample Image" onclick="fadeOut9()">

<div class="container">
  <img id="tarot10" src="assets/empress_full.jpg" alt="Sample Image" onclick="fadeOut10()">
  <img id="hiddenimage" src="assets/tarot10.jpg" alt="Image 2">
</div>
	
<!--
<div linkblock>
	<img id="tarot10" src="assets/tarot10.jpg" alt="Sample Image" onclick="fadeOut10()">
	<div class ="feature__item">
		<div class="feature__item-teaser">
			<img src="assets/subway_nyc.jpg" min-width="150" min-height="150"/>
		</div>
		<h3>Travel Grants</h3>
		<figcaption  class="archive__item-title">Applications for Travel Grants for MSA '25, Boston are now open.</figcaption>
		<a href="/members/travel-grants" class="btn btn--primary">Apply</a>
	</div>
</div>
-->
	
<script>
function fadeOut1() {
  const tarot1 = document.getElementById('tarot1');
  tarot1.classList.add('fade-out');
}
function fadeOut2() {
  const tarot2 = document.getElementById('tarot2');
  tarot2.classList.add('fade-out');
}
function fadeOut3() {
  const tarot3 = document.getElementById('tarot3');
  tarot3.classList.add('fade-out');
}
function fadeOut4() {
  const tarot4 = document.getElementById('tarot4');
  tarot4.classList.add('fade-out');
}
function fadeOut5() {
  const tarot5 = document.getElementById('tarot5');
  tarot5.classList.add('fade-out');
}
function fadeOut6() {
  const tarot6 = document.getElementById('tarot6');
  tarot6.classList.add('fade-out');
}
function fadeOut7() {
  const tarot7 = document.getElementById('tarot7');
  tarot7.classList.add('fade-out');
}
function fadeOut8() {
  const tarot8 = document.getElementById('tarot8');
  tarot8.classList.add('fade-out');
}
function fadeOut9() {
  const tarot9 = document.getElementById('tarot9');
  tarot9.classList.add('fade-out');
}
function fadeOut10() {
  const tarot10 = document.getElementById('tarot10');
  tarot10.classList.add('fade-out');
}

</script>

</body>