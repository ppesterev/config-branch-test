window.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector("h1");var e;(e="https://raw.githubusercontent.com/ppesterev/config-branch-test/config/config.json",fetch(e).then((t=>t.json())).catch((t=>({error:t})))).then((e=>{e.error||(document.title=e.title,t.textContent=e.title,document.body.style.backgroundColor=e.color)}))}));
//# sourceMappingURL=index.961298b4.js.map
