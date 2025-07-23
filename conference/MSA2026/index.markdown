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
      width: 200px;
      height: auto;
    }
	
	#tarot2 {
      width: 200px;
      height: auto;
    }

	#tarot3 {
      width: 200px;
      height: auto;
    }

	#tarot4 {
      width: 200px;
      height: auto;
    }

	#tarot5 {
      width: 200px;
      height: auto;
    }

	#tarot6 {
      width: 200px;
      height: auto;
    }
	
	#tarot7 {
      width: 200px;
      height: auto;
    }
	
	.pagethumb {
	  position: absolute;
	  width: 200px;
      height: auto;
	
    .fade-out {
      animation: fadeOut 2s forwards;
    }
  </style>
</head>

<body>
	<div>
		<img id="tarot1" src="assets/tarot1.jpg" alt="Sample Image" onclick="fadeOut1()">
		<img id="tarot7" src="assets/tarot7.jpg" alt="Sample Image" style="position: absolute;">
	</div>
	<img id="tarot2" src="assets/tarot2.jpg" alt="Sample Image" onclick="fadeOut2()">
	<img id="tarot3" src="assets/tarot3.jpg" alt="Sample Image" onclick="fadeOut3()">
	<img id="tarot4" src="assets/tarot4.jpg" alt="Sample Image" onclick="fadeOut4()">
	<img id="tarot5" src="assets/tarot5.jpg" alt="Sample Image" onclick="fadeOut5()">	
	<img id="tarot6" src="assets/tarot6.jpg" alt="Sample Image" onclick="fadeOut6()">	
	
	<div class="pagethumb"
	</div>
<div class="feature__wrapper">
		
		<div class ="feature__item">
				<div class="feature__item-teaser">
					<img src="assets/subway_nyc.jpg" min-width="150" min-height="150"/>
				</div>
				<h3>Travel Grants</h3>
				<figcaption  class="archive__item-title">Applications for Travel Grants for MSA '25, Boston are now open.</figcaption>
			<a href="/members/travel-grants" class="btn btn--primary">Apply</a>
		</div>	
		<div class ="feature__item">
				<div class="feature__item-teaser">
					<img src="assets/subway_nyc.jpg" min-width="150" min-height="150"/>
				</div>
				<h3>Travel Grants</h3>
				<figcaption  class="archive__item-title">Applications for Travel Grants for MSA '25, Boston are now open.</figcaption>
			<a href="/members/travel-grants" class="btn btn--primary">Apply</a>
		</div>	
		<div class ="feature__item">
				<div class="feature__item-teaser">
					<img src="assets/subway_nyc.jpg" min-width="150" min-height="150"/>
				</div>
				<h3>Travel Grants</h3>
				<figcaption  class="archive__item-title">Applications for Travel Grants for MSA '25, Boston are now open.</figcaption>
			<a href="/members/travel-grants" class="btn btn--primary">Apply</a>
		</div>	
</div>		



	
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
  </script>
</body>