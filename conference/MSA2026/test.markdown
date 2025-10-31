---
layout: 26conference-hub
permalink: /conference/MSA2026/test/
masthead: false
footer: false
---

<html>
<head>
    <style>
        body {
    text-align: center;
}
h1 {
    color: green;
        }
img {
    position: absolute;
    left: 400px;
}
    </style>
</head>

<body>

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
    
 </style>

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



</body>
