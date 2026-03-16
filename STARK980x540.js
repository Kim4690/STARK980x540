<!DOCTYPE html>
<html lang="da">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

html,body{
margin:0;
padding:0;
}

#banner{
position:relative;
width:100%;
height:100%;
max-width:980px;
max-height:540px;
overflow:hidden;
cursor:pointer;
font-family:Arial, Helvetica, sans-serif;
}

/* Baggrund */

.bg{
position:absolute;
top:0;
left:0;
width:110%;
height:110%;
background:url("Banner2.") center center / cover no-repeat;
animation:slowMove 45s ease-in-out infinite alternate;
}

/* Meget langsom bevægelse */

@keyframes slowMove{
0%{transform:translate(0,0) scale(1);}
100%{transform:translate(-2%, -2%) scale(1.05);}
}

/* CTA */

.cta{
position:absolute;
bottom:10%;
left:50%;
transform:translateX(-50%);
background:#f58220;
color:white;
font-weight:bold;
padding:12px 28px;
font-size:20px;
animation:blink 3s infinite;
}

@keyframes blink{
0%,100%{opacity:1;}
50%{opacity:0.4;}
}

/* Klik besked */

.overlay{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.85);
color:white;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
font-size:28px;
opacity:0;
transition:0.3s;
}

.overlay.show{
opacity:1;
}

</style>
</head>

<body>

<div id="banner">

<div class="bg"></div>

<div class="cta">
SE MERE
</div>

<div class="overlay" id="overlay">
Tak for at du klikkede på banneret
</div>

</div>

<script>

var banner = document.getElementById("banner");
var overlay = document.getElementById("overlay");

var landingpage = "https://bygtek.dk";

banner.onclick = function(){

overlay.classList.add("show");

setTimeout(function(){
window.open(landingpage,"_blank");
},2000);

}

</script>

</body>
</html>
