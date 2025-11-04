---
layout: 26conference-hub
permalink: /conference/MSA2026/test1/
masthead: false
footer: false
---


  
 
<!--Working! -->

<style>
 
 img {
    position: absolute;
    width: 200px;
 }
 
 @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

.fade-out {
      animation: fadeOut 3s forwards;
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
  

.container {
	display: inline-block;
	position: relative;
	align-content: center;
	padding: 5px 0px 0px 0px;
	width: 190px;
	height: 335px;
	perspective: 500px; /* Adds depth for 3D transformations */
}

.hiddenimage {
  position: absolute;
  top: 0px; /* Adjust position as needed */
  left: 0px;
  background-color: #b39974;
 /*  border:10px inset #b39974; */
  text-align: center;
  align-content: center;
  /* margin: 10px; */
  padding: 5px 5px 5px 5px;
  width: 180px;
  height: 325px;
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
	top: 15px;
}

.hidlink {
	position: absolute;
	width: 90%;
	top: 75%;
	left: 50%;
	transform: translate(-50%, 0%);
}  	
    
</style>
 
<!--
<div class="container">
  <div class="hiddenimage">
    <img src="https://steve-p.org/cards/pix/RWSa-T-01.png" class="test" id="top" onclick="fadeOut()">
	<div class="feature__item-teaser">
		<img src="assets/loughborough_logo.jpg" width="100" min-height="50"/>
	</div>
	<figcaption  class="archive__item-title" style="font-size: 1rem; font-family: Sansita, cursive; font-weight: 700;">Loughborough University, UK<br>July  1-4, 2026<br>Co-hosted by<br>BAMS and MSA<p></p></figcaption>
	<a href="/conference/MSA2026/CFP/" class="click">CFP</a>
  </div>
</div>
-->


<img src="https://steve-p.org/cards/pix/RWSa-T-00.png" class="test" id="bottom">

<img src="https://steve-p.org/cards/pix/RWSa-T-01.png" class="test" id="top" onclick="fadeOut()">



<script>

function fadeOut() {
	setTimeout(disappear, 2000)
      function disappear(){
        bottom.style.zIndex = 2;
      }   
      const top = document.getElementById('top');
      top.classList.add('fade-out');
  }

</script>    

