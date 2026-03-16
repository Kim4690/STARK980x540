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

.banner{
position:relative;
width:100%;
max-width:980px;
aspect-ratio:980/540;
overflow:hidden;
cursor:pointer;
font-family:Arial, Helvetica, sans-serif;
}

/* Baggrundsbillede */

.bg{
position:absolute;
width:110%;
height:110%;
background-image:url('banner1.png');
background-size:cover;
background-position:center;
animation:slowMove 40s ease-in-out infinite alternate;
}

/* Meget langsom bevægelse */

@keyframes slowMove{
0%{transform:translate(0,0) scale(1);}
100%{transform:translate(-3%, -2%) scale(1.05);}
}

/* CTA knap */

.cta{
position:absolute;
bottom:12%;
left:50%;
transform:translateX(-50%);
background:#f58220;
color:white;
font-weight:bold;
padding:14px 30px;
font-size:clamp(14px,2.5vw,22px);
animation:blink 3s infinite;
}

/* langsom blink */

@keyframes blink{
0%,100%{opacity:1;}
50%{opacity:0.4;}
}

/* overlay efter klik */

.overlay{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.85);
display:flex;
align-items:center;
justify-content:center;
text-align:center;
color:white;
font-size:clamp(18px,3vw,32px);
opacity:0;
pointer-events:none;
transition:0.4s;
padding:20px;
}

.overlay.show{
opacity:1;
pointer-events:auto;
}

</style>
</head>

<body>

<div class="banner" id="banner">

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

var landingpage = "https://indsæt-landingpage-her.dk";

banner.addEventListener("click", function(){

overlay.classList.add("show");

setTimeout(function(){
window.open(landingpage,"_blank");
},1800);

});

</script>

</body>
</html>