import{_ as l,o as r,c as n,F as m,r as d,a,n as i}from"./index-B75fBecj.js";const h={data(){return{}},beforeMount(){this.showMeteor()},methods:{showMeteor(){let e=Math.random()*3e3+1e3;setTimeout(()=>{const t=Math.random()*100,o=Math.random()*100;let s=`<span class="meteor" style="top:${t}vh;left:${o}vw"></span>`;document.getElementById("meteor").innerHTML=s,this.showMeteor()},e)}}},p={class:"entry"},_=a("span",{id:"meteor"},null,-1);function u(e,t,o,s,f,M){return r(),n("div",p,[(r(),n(m,null,d(4,c=>a("div",{class:i(`layer${c}`)},null,2)),64)),_])}const y=l(h,[["render",u]]);export{y as default};
