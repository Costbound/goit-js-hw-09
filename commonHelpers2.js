import"./assets/modulepreload-polyfill-9p4a8sJU.js";const e=document.querySelector("form"),t=e.elements.email,a=e.elements.message,n="feedback-form-state",o=JSON.parse(localStorage.getItem(n));o&&(t.value=o.email,a.value=o.message);e.addEventListener("input",s);e.addEventListener("submit",m);function s(){const l={email:t.value.trim(),message:a.value.trim()};localStorage.setItem(n,JSON.stringify(l))}function m(l){l.preventDefault(),t.value.length>0&&a.value.length>0&&(console.log(t.value),console.log(a.value),localStorage.removeItem(n),e.reset())}
//# sourceMappingURL=commonHelpers2.js.map