const r=9,l=14,t=[...Array(24).fill("E"),...Array(16).fill("A"),...Array(15).fill("O"),...Array(15).fill("T"),...Array(13).fill("I"),...Array(13).fill("N"),...Array(13).fill("R"),...Array(10).fill("S"),...Array(7).fill("L"),...Array(5).fill("U"),...Array(8).fill("D"),...Array(5).fill("G"),...Array(6).fill("C"),...Array(6).fill("M"),...Array(4).fill("B"),...Array(4).fill("P"),...Array(5).fill("H"),...Array(4).fill("F"),...Array(4).fill("W"),...Array(4).fill("Y"),...Array(3).fill("V"),...Array(2).fill("K"),...Array(2).fill("J"),...Array(2).fill("X"),...Array(2).fill("Qu"),...Array(2).fill("Z")],a=t.length,i=[60,120,180,240,300];function n(r){return[Math.floor(r/9),r%9]}function f(r,l){return 9*r+l}function e(r){return r<0?"0:00":`${Math.floor(r/60)}:${r%60<10?"0"+r%60:r%60}`}function o(r){let l=r.length-3,t=0;for(;;){let a=r.indexOf("QU",t);if(-1===a)break;l--,t=a+1}let a=10,i=10;for(;l>0;)l--,a+=i,i+=10;return a}function s(r,l){const[t,a]=n(r),[i,f]=n(l);return a===f?1===Math.abs(t-i):(t===i||t-i==1-a%2*2)&&1===Math.abs(a-f)}function c(r,l){const[t,a]=n(r),[i,f]=n(l);if(a===f)return t-i==-1?0:t-i==1&&6;if(t===i)return a-f==-1?f%2==0?4:2:a-f==1&&(f%2==0?8:10);if(f%2==0){if(t-i==-1){if(a-f==1)return 10;if(a-f==-1)return 2}return!1}if(t-i==1){if(a-f==1)return 8;if(a-f==-1)return 4}return!1}function u(r){for(let l=r.length-1;l>0;l--){const t=Math.floor(Math.random()*(l+1));[r[l],r[t]]=[r[t],r[l]]}}function y(){try{const r=window.localStorage.getItem("options_time_limit");if(null!=r)return parseInt(r,10)||180}catch(r){}return 180}function A(r){try{window.localStorage.setItem("options_time_limit",r)}catch(l){}}function h(){try{return JSON.parse(window.localStorage.getItem("scores"))}catch(r){return null}}function g(r){try{window.localStorage.setItem("scores",JSON.stringify(r))}catch(l){}}export{a as A,r as B,i as T,o as a,e as b,l as c,g as d,t as e,n as f,h as g,f as h,s as i,c as j,y as k,A as l,u as s};
