import{_ as d,o as c,b as m,d as o,t as h}from"./index-DHCAOzYe.js";const u={data(){return{setTimeout:"",message:["您看，有流星","好療癒喔","快許願","平安","健康","幸福","等等","摸太多次了喔","變態阿 ~","警察先生","有怪怪的人","就是她","奇怪耶","看星星就看星星","摸我幹嘛","阿彌陀佛","退散","阿 ~ ","討厭耶","看招","請您吃大蒜","哼","不理妳了","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","  .....  ","好啦","好好看星星","晚安","瑪卡巴卡"],text:"",touchCount:0}},methods:{touchOldmoon(){let s=document.getElementById("oldmoon"),t=document.getElementById("message");if(this.text=this.message[this.touchCount],this.touchCount<this.message.length){if(this.touchCount>7){const e=Math.random()*60+10,n=window.innerWidth>900?Math.random()*70:Math.random()*50;s.style.top=`${e}vh`,s.style.left=`${n}vw`,t.style.top=`${e-13}vh`,t.style.left=`${n}vw`}t.style.display="flex",clearTimeout(this.setTimeout),this.setTimeout=setTimeout(()=>{t.style.display="none"},500),this.touchCount++}else s.style.animation="fadeOut 3s",setTimeout(()=>{s.style.display="none"},3e3)}}},r={class:"stargazing"},_={id:"message",class:"message",style:{display:"none"}},g={class:"messageBox"},p=o("span",{class:"arrow_b_int"},null,-1),y=o("span",{class:"arrow_b_out"},null,-1),f={class:"text"},x=["src"];function v(s,t,e,n,a,l){return c(),m("div",r,[o("div",_,[o("div",g,[p,y,o("span",f,h(a.text),1)])]),o("img",{id:"oldmoon",class:"oldmoon",src:s.logo1,onClick:t[0]||(t[0]=(...i)=>l.touchOldmoon&&l.touchOldmoon(...i))},null,8,x)])}const w=d(u,[["render",v]]);export{w as default};
