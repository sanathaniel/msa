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
    #image {
      width: 200px;
      height: auto;
      transition: opacity 1s ease-in-out;
    }
    .hidden {
      opacity: 0;
    }
  </style>
</head>

<body>
  <img id="image" src="/conference/MSA2026/assets/empress_full.jpg" alt="Sample Image">
  <button onclick="fadeOut()">Disappear</button>

  <script>
    function fadeOut() {
      const image = document.getElementById('image');
      image.classList.add('hidden');
    }
  </script>
</body>
</html>