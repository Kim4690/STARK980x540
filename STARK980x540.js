(function(){

var landingpage = "https://bygtek.dk";

var banner = document.createElement("div");

banner.style.width = "100%";
banner.style.maxWidth = "980px";
banner.style.aspectRatio = "980/540";
banner.style.position = "relative";
banner.style.overflow = "hidden";
banner.style.cursor = "pointer";
banner.style.fontFamily = "Arial, sans-serif";

banner.innerHTML = `

<style>

.stark-bg{
position:absolute;
width:110%;
height:110%;
top:-5%;
left:-5%;
object-fit:cover;
animation:starkMove 80s ease-in-out infinite alternate;
}

@keyframes starkMove{
0%{transform:translate(0,0) scale(1);}
100%{transform:translate(-2%, -2%) scale(1.04);}
}

.stark-cta{
position:absolute;
bottom:6%;
left:50%;
transform:translateX(-50%);
background:#f58220;
color:white;
font-weight:bold;
padding:12px 26px;
font-size:clamp(12px,2vw,22px);
animation:starkBlink 3s infinite;
border-radius:4px;
}

@keyframes starkBlink{
0%,100%{opacity:1;}
50%{opacity:0.4;}
}

.stark-overlay{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:#f58220;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:clamp(16px,3vw,30px);
opacity:0;
transition:opacity 0.4s;
}

.stark-overlay.show{
opacity:1;
}

</style>

<img class="stark-bg" src="https://kim4690.github.io/STARK980x540/banner3.jpg">

<div class="stark-cta">
SE MERE
</div>

<div class="stark-overlay">
Tak for at du klikkede på banneret
</div>

`;

banner.onclick = function(){

var overlay = banner.querySelector(".stark-overlay");
var cta = banner.querySelector(".stark-cta");

overlay.classList.add("show");

/* stop blink når der klikkes */

cta.style.animation = "none";

setTimeout(function(){
window.open(landingpage,"_blank");
},1800);

setTimeout(function(){
overlay.classList.remove("show");
cta.style.animation = "starkBlink 3s infinite";
},2200);

};

document.body.appendChild(banner);

})();
