---
layout: 26conference-hub
permalink: /conference/MSA2026/test/
masthead: false
footer: false
---


 
<style>

body {
	background-color: ##e3e4e6;
	font-style: Sansita;
	color: black;
	a:link {
		color: black;
	}
	a:visited {
		color: black;
	}
}

img {
    width: 190px;
	position: relative;
 }
 
 @keyframes fliptop {
    from { width: 190px; height: 317px; top: 25px;}
    to { width: 0px; height: 317px; 25px;}
}

@keyframes flipbottom {
    from { width: 0px; height: 317px;}
    to { width: 190px; height: 317px;}
}


.flip-top {
      animation: fliptop 1s forwards;
    }

.flip-bottom {
      animation: flipbottom 1s forwards;
    }


.container {
	position: relative;
	top: 5px;
	align-content: center;
	padding: 0px 0px 0px 0px;
	margin: 10px 10px 10px 10px;
	width: 190px;
	height: 317px;
}

.all-cards {
	display: inline-flex;
    max-width: 725px;
    flex-direction: row;
    flex-wrap: wrap;
}



</style>

<h1>Weird Modernisms
</h1>
<h2>
Presented by MSA & BAMS<br>
Loughborough, UK, 1-4 July, 2026
</h2>
 
<div class="main-wrapper">
	<div class="feature__wrapper" style="display: contents;">
		<div class="all-cards">
			<div class="container">
				<img src="/conference/MSA2026/assets/back_intro.jpg" id="bottom1" style="width:0%">
				<img src="/conference/MSA2026/assets/empress_full.jpg" id="top1" style="top: -25px;" onclick="fadeOut1()">
			</div>

			<div class="container">
				<a href="/conference/MSA2026/CFP/">
					<img src="/conference/MSA2026/assets/back_cfp.jpg" id="bottom2" style="width:0%">
				</a>
				<img src="/conference/MSA2026/assets/tarot_hanged.png" id="top2" style="top: -25px;" onclick="fadeOut2()">
			</div>

			<div class="container">
				<a href="/conference/MSA2026/seminars/">
						<img src="/conference/MSA2026/assets/back_seminar.jpg" id="bottom3" style="width:0%">
				</a>
				<img src="/conference/MSA2026/assets/tarot_star.png" id="top3" style="top: -25px;" onclick="fadeOut3()">
			</div>

			<div class="container">
				<a href="/conference/MSA2026/workshops/">
						<img src="/conference/MSA2026/assets/back_workshop.jpg" id="bottom4" style="width:0%">
				</a>
				<img src="/conference/MSA2026/assets/tarot_moon.png" id="top4" style="top: -25px;" onclick="fadeOut4()">
			</div>

			<div class="container">
				<a href="/conference/MSA2026/events/">
						<img src="/conference/MSA2026/assets/back_events.jpg" id="bottom5" style="width:0%">
				</a>
				<img src="/conference/MSA2026/assets/tarot_fool.png" id="top5" style="top: -25px;" onclick="fadeOut5()">
			</div>

			<div class="container">
				<a href="/conference/MSA2026/travel/">
						<img src="/conference/MSA2026/assets/back_travel.jpg" id="bottom6" style="width:0%">
				</a>
				<img src="/conference/MSA2026/assets/tarot_world.png" id="top6" style="top: -25px;" onclick="fadeOut6()">
			</div>

			<div class="container">
				<a href="/conference/MSA2026/registration/">
						<img src="/conference/MSA2026/assets/back_registration.jpg" id="bottom7" style="width:0%">
				</a>
				<img src="/conference/MSA2026/assets/tarot_fortune.png" id="top7" style="top: -25px;" onclick="fadeOut7()">
			</div>

			<div class="container">
				<a href="/conference/MSA2026/program/">
						<img src="/conference/MSA2026/assets/back_program.jpg" id="bottom8" style="width:0%">
				</a>
				<img src="/conference/MSA2026/assets/tarot_priestess.png" id="top8" style="top: -25px;" onclick="fadeOut8()">
			</div>	

			<div class="container">
				<a href="https://www.moderniststudies.org/">
						<img src="/conference/MSA2026/assets/back_msa.jpg" id="bottom9" style="width:0%">
				</a>
				<img src="/conference/MSA2026/assets/tarot_strength.png" id="top9" style="top: -25px;" onclick="fadeOut9()">
			</div>		
		</div>
	</div>
</div>

<script>

function fadeOut() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom = document.getElementById('bottom');
      	bottom.classList.add('flip-bottom'); 
      }
    const top = document.getElementById('top');
    top.classList.add('flip-top');
  }

function fadeOut1() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom1.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom1 = document.getElementById('bottom1');
      	bottom1.classList.add('flip-bottom'); 
      }
    const top1 = document.getElementById('top1');
    top1.classList.add('flip-top');
  }
  
function fadeOut2() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom2.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom2 = document.getElementById('bottom2');
      	bottom2.classList.add('flip-bottom'); 
      }
    const top2 = document.getElementById('top2');
    top2.classList.add('flip-top');
  }
  
function fadeOut3() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom3.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom3 = document.getElementById('bottom3');
      	bottom3.classList.add('flip-bottom'); 
      }
    const top3 = document.getElementById('top3');
    top3.classList.add('flip-top');
  }

function fadeOut4() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom4.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom4 = document.getElementById('bottom4');
      	bottom4.classList.add('flip-bottom'); 
      }
    const top4 = document.getElementById('top4');
    top4.classList.add('flip-top');
  }
  
function fadeOut5() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom5.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom5 = document.getElementById('bottom5');
      	bottom5.classList.add('flip-bottom'); 
      }
    const top5 = document.getElementById('top5');
    top5.classList.add('flip-top');
  }
  
function fadeOut6() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom6.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom6 = document.getElementById('bottom6');
      	bottom6.classList.add('flip-bottom'); 
      }
    const top6 = document.getElementById('top6');
    top6.classList.add('flip-top');
  }

function fadeOut7() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom7.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom7 = document.getElementById('bottom7');
      	bottom7.classList.add('flip-bottom'); 
      }
    const top7 = document.getElementById('top7');
    top7.classList.add('flip-top');
  }

function fadeOut8() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom8.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom8 = document.getElementById('bottom8');
      	bottom8.classList.add('flip-bottom'); 
      }
    const top8 = document.getElementById('top8');
    top8.classList.add('flip-top');
  }
  
function fadeOut9() {
	setTimeout(disappear, 1000)
      function disappear(){
        bottom9.style.zIndex = 2;
      }   
    setTimeout(delay, 1000)
      function delay(){  
        const bottom9 = document.getElementById('bottom9');
      	bottom9.classList.add('flip-bottom'); 
      }
    const top9 = document.getElementById('top9');
    top9.classList.add('flip-top');
  }

</script> 

