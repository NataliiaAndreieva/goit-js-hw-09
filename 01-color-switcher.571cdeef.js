const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));let d=null;e.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.571cdeef.js.map
