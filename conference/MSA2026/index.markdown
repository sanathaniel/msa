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
	<img id="image" src="assets/tarot1.jpg" alt="Sample Image" onclick="fadeOut()">
	<img id="image" src="assets/tarot2.jpg" alt="Sample Image" onclick="fadeOut()">
	<img id="image" src="assets/tarot3.jpg" alt="Sample Image" onclick="fadeOut()">
	<img id="image" src="assets/tarot4.jpg" alt="Sample Image" onclick="fadeOut()">
	
	
	
  <script>
    function fadeOut() {
      const image = document.getElementById('image');
      image.classList.add('fade-out');
    }
  </script>
</body>