var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("7Y9D8");const l={form:document.querySelector("form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnSubmit:document.querySelector('button[type="submit"]')};function i(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}console.log("refs",l),l.form.addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.currentTarget.elements.delay.value),o=Number(e.currentTarget.elements.step.value),n=Number(e.currentTarget.elements.amount.value);for(let e=1;e<=n;e+=1){let n=t+o*(e-1);console.log(n),i(e,n).then((({position:e,delay:t})=>{r.Notify.success(`Fulfilled promise ${e} in ${t}ms`),console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`Rejected promise ${e} in ${t}ms`),console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.d1a54fe5.js.map
