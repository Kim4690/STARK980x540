(function(){

var landingpage = "https://bygtek.dk.dk";

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
background:url("Banner2.jpg") center/cover no-repeat;
animation:starkMove 50s ease-in-out infinite alternate;
}

@keyframes starkMove{
0%{transform:translate(0,0) scale(1);}
100%{transform:translate(-3%, -2%) scale(1.05);}
}

.stark-cta{
position:absolute;
bottom:12%;
left:50%;
transform:translateX(-50%);
background:#f58220;
color:white;
font-weight:bold;
padding:14px 30px;
font-size:clamp(14px,2vw,22px);
animation:starkBlink 3s infinite;
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
background:rgba(0,0,0,0.85);
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:clamp(18px,3vw,30px);
opacity:0;
transition:0.4s;
}

.stark-overlay.show{
opacity:1;
}

</style>

<div class="stark-bg"></div>

<div class="stark-cta">
SE MERE
</div>

<div class="stark-overlay">
Tak for at du klikkede på banneret
</div>

`;

banner.onclick = function(){

var overlay = banner.querySelector(".stark-overlay");
overlay.classList.add("show");

setTimeout(function(){
window.open(landingpage,"_blank");
},1800);

};

document.currentScript.parentNode.insertBefore(banner, document.currentScript);

})();
