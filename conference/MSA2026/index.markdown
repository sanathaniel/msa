---
layout: 26conference-hub
permalink: /conference/MSA2026/
masthead: false
footer: false
---


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap" rel="stylesheet">
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
 
	body {
		background-color: #fffe8b4;
		font-style: Sansita;
		color: #41391f;
		a:link {
			color: #41391f;
		}
		a:visited {
			color: #41391f;
		}
	}
	  
    #tarot1 {
      cursor: pointer;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }
	
	#tarot2 {
      cursor: pointer;	
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	#tarot3 {
      cursor: pointer;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	#tarot4 {
      cursor: pointer;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	#tarot5 {
      cursor: pointer;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	#tarot6 {
      cursor: pointer;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	#tarot7 {
      cursor: pointer;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	#tarot8 {
      cursor: pointer;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	#tarot9 {
      cursor: pointer;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	#tarot10 {
      cursor: pointer;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 190px;
      height: auto;
	  z-index: 2;
    }

	.hiddenimage {
	  position: absolute;
	  top: 0px; /* Adjust position as needed */
	  left: 0px;
	  background-color: #c7a759;
	 /*  border:10px inset #b39974; */
	  text-align: center;
	  align-content: center;
	  /* margin: 10px; */
	  padding: 5px 5px 5px 5px;
	  width: 176px;
	  height: auto;
	  z-index: 1;
	  box-shadow: 0px 0px 3px 3px gray;
	  font-family: "Sansita", sans-serif;
	  font-weight: 700;
	  font-style: normal;
	  line-height: 1.2;
	  &:hover {
		  box-shadow: 0px 0px 6px 6px gray;
		}
	}
	
	.container {
		display: inline-block;
		position: relative;
		align-content: center;
		padding: 5px 0px 0px 0px;
		width: 195px;
		height: 350px;
	}
		
    .fade-out {
      animation: fadeOut 2s forwards;
    }
	
	.click {
		display: inline-block;
		padding: 2px;
		border-radius: 2px;
		text-align: center;
		font-size: 20px;
		line-height: 1.25;
		background-color: #b39974;
		width: 156px; 
		border: 2px solid #41391f;"
		color: #41391f;
    cursor: pointer;
	}
	
	.click:hover {
    background-color: #a99277;
	}
	
	.hidtext {
		position: absolute;
		width: 90%;
		top: 10px;
	}
	
	.hidlink {
		position: absolute;
		width: 90%;
		top: 75%;
		left: 50%;
		transform: translate(-50%, 0%);
	}  	

  </style>
</head>

	

<body>

<h1>
Weird Modernisms 
</h1>

<div class="container">
  <img id="tarot1" src="assets/empress_full.jpg" alt="Sample Image" onclick="fadeOut1()">
  <div class="hiddenimage">
	<div class="feature__item-teaser">
		<img src="assets/loughborough_logo.jpg" width="100" min-height="50"/>
	</div>
	<figcaption  class="archive__item-title" style="font-size: 1rem; font-family: Sansita, cursive; font-weight: 700;">Loughborough University, UK<br>July  1-4, 2026<br>Co-hosted by<br>BAMS and MSA<p></p></figcaption>
	<a href="conference/MSA2026/CFP/" class="click">CFP</a>

  </div>
</div>
 
<div class="container">
  <img id="tarot2" src="assets/tarot4.jpg" alt="Sample Image" onclick="fadeOut2()">
  <div class="hiddenimage">
	<img src="assets/loughborough.jpg">
	<div class="hidtext">Loughborough University, UK</div>
	<div class="hidlink">July 1-4, 2026,Co-hosted by BAMS and MSA</div>
  </div>
</div>

<div class="container">
  <img id="tarot3" src="assets/tarot5.jpg" alt="Sample Image" onclick="fadeOut3()">
  <div class="hiddenimage">
  Hidden Stuff 3
  </div>
</div>

<div class="container">
  <img id="tarot4" src="assets/tarot6.jpg" alt="Sample Image" onclick="fadeOut4()">
  <div class="hiddenimage">
  Hidden Stuff 4
  </div>
</div>

<div class="container">
  <img id="tarot5" src="assets/tarot7.jpg" alt="Sample Image" onclick="fadeOut5()">
  <div class="hiddenimage">
  Hidden Stuff 5
  </div>
</div>

<div class="container">
  <img id="tarot6" src="assets/tarot8.jpg" alt="Sample Image" onclick="fadeOut6()">
  <div class="hiddenimage">
  Hidden Stuff 6
  </div>
</div>

<div class="container">
  <img id="tarot7" src="assets/tarot9.jpg" alt="Sample Image" onclick="fadeOut7()">
  <div class="hiddenimage">
  Hidden Stuff 7
  </div>
</div>

<div class="container">
  <img id="tarot8" src="assets/tarot10.jpg" alt="Sample Image" onclick="fadeOut8()">
  <div class="hiddenimage">
  Hidden Stuff 8
  </div>
</div>

<div class="container">
  <img id="tarot9" src="assets/tarot11.jpg" alt="Sample Image" onclick="fadeOut9()">
  <div class="hiddenimage">
  Hidden Stuff 9
  </div>
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