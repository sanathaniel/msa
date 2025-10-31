---
layout: 26conference-hub
permalink: /conference/MSA2026/test/
masthead: false
footer: false
---


<p>
    <img alt="" src="/msa2026/assets/tarot_priestess.png" 
        style="height: 85px; width: 198px" id="imgClickAndChange" onclick="changeImage()"/>
</p>




	
<script>

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "/msa2026/assets/tarot_priestess.png"){
        document.getElementById("imgClickAndChange").src = "/msa2026/assets/hermit.png";
    } else {
        document.getElementById("imgClickAndChange").src = "/msa2026/assets/tarot_priestess.png";
    }
}

</script>

