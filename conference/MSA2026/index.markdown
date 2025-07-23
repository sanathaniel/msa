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

    .fade-out {
      animation: fadeOut 2s forwards;
    }
  </style>
</head>

<body>
  <img id="tarot1" src="assets/empress_full.jpg" alt="Sample Image" onclick="fadeOut()">
  <img id="tarot2" src="assets/empress_full.jpg" alt="Sample Image" onclick="fadeOut()">
  <img id="tarot3" src="assets/empress_full.jpg" alt="Sample Image" onclick="fadeOut()">

  <script>
    function fadeOut() {
      const image = document.getElementById('tarot1');
      image.classList.add('fade-out');
    }
	function fadeOut() {
      const image = document.getElementById('tarot2');
      image.classList.add('fade-out');
    }
	function fadeOut() {
      const image = document.getElementById('tarot3');
      image.classList.add('fade-out');
    }
  </script>
</body>