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

    #image {
      width: 200px;
      height: auto;
    }
	
	#image1 {
      width: 200px;
      height: auto;
    }
	
    .fade-out {
      animation: fadeOut 2s forwards;
    }
  </style>
</head>

<body>
	<img id="tarot1" src="assets/tarot1.jpg" alt="Sample Image" onclick="fadeOut1()">
	<img id="tarot2" src="assets/tarot2.jpg" alt="Sample Image" onclick="fadeOut2()">
	<img id="tarot3" src="assets/tarot3.jpg" alt="Sample Image" onclick="fadeOut3()">
	<img id="tarot4" src="assets/tarot4.jpg" alt="Sample Image" onclick="fadeOut4()">
	<img id="tarot5" src="assets/tarot5.jpg" alt="Sample Image" onclick="fadeOut5()">	
	<img id="tarot6" src="assets/tarot6.jpg" alt="Sample Image" onclick="fadeOut6()">	
	
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