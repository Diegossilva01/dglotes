/* ===================================================
DG LOGÍSTICA REVERSA
SCRIPT.JS
=================================================== */

// Loader
window.addEventListener("load", () => {
const loader = document.getElementById("loader");
if (loader) {
setTimeout(() => {
loader.style.opacity = "0";
loader.style.pointerEvents = "none";

setTimeout(() => {
loader.remove();
}, 500);
}, 700);
}
});

// Scroll Reveal
const reveals = document.querySelectorAll(".fade-up");

const revealOnScroll = () => {

reveals.forEach((el) => {

const top = el.getBoundingClientRect().top;

if (top < window.innerHeight - 80) {

el.classList.add("show");

}

});

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// Contador animado

const counters = document.querySelectorAll("[data-counter]");

const startCounter = () => {

counters.forEach(counter => {

if (counter.dataset.started) return;

const top = counter.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {

counter.dataset.started = true;

const max = Number(counter.dataset.counter);

let n = 0;

const timer = setInterval(() => {

n += Math.ceil(max / 60);

if (n >= max) {

n = max;

clearInterval(timer);

}

counter.innerHTML = n.toLocaleString("pt-BR");

}, 20);

}

});

};

window.addEventListener("scroll", startCounter);

startCounter();

// Navbar

window.addEventListener("scroll", () => {

const nav = document.querySelector(".navbar");

if (!nav) return;

if (window.scrollY > 40) {

nav.style.background = "#0f1115";

nav.style.padding = "10px 0";

} else {

nav.style.background = "rgba(0,0,0,.55)";

nav.style.padding = "15px 0";

}

});

// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", e => {

const destino = document.querySelector(link.getAttribute("href"));

if (!destino) return;

e.preventDefault();

destino.scrollIntoView({

behavior: "smooth"

});

});

});

/* =======================
CALCULADORA DE LUCRO
======================= */

const calcular = document.getElementById("calcular");

if (calcular) {

calcular.onclick = () => {

const investimento = Number(document.getElementById("investimento").value);

const categoria = Number(document.getElementById("categoria").value);

if (!investimento || investimento <= 0) {

alert("Informe um valor.");

return;

}

const faturamento = investimento * categoria;

const lucro = faturamento - investimento;

document.getElementById("valorInvestido").innerHTML =
investimento.toLocaleString("pt-BR", {
style: "currency",
currency: "BRL"
});

document.getElementById("valorVenda").innerHTML =
faturamento.toLocaleString("pt-BR", {
style: "currency",
currency: "BRL"
});

document.getElementById("valorLucro").innerHTML =
lucro.toLocaleString("pt-BR", {
style: "currency",
currency: "BRL"
});

};

}

/* =======================
GALERIA
======================= */

document.querySelectorAll(".gallery-img").forEach(img => {

img.onclick = () => {

window.open(img.src);

};

});

/* =======================
BOTÃO WHATSAPP
======================= */

const whatsapp = document.querySelector(".whatsapp-float");

if (whatsapp) {

whatsapp.addEventListener("mouseenter", () => {

whatsapp.style.transform = "scale(1.12)";

});

whatsapp.addEventListener("mouseleave", () => {

whatsapp.style.transform = "scale(1)";

});

}

/* =======================
EFEITO DIGITAÇÃO
======================= */

const typing = document.querySelector(".typing");

if (typing) {

const texto = typing.innerHTML;

typing.innerHTML = "";

let i = 0;

const escrever = () => {

if (i < texto.length) {

typing.innerHTML += texto.charAt(i);

i++;

setTimeout(escrever, 45);

}

}

escrever();

}

/* =======================
BOTÃO VOLTAR AO TOPO
======================= */

const voltar = document.createElement("div");

voltar.innerHTML = "↑";

voltar.style.position = "fixed";

voltar.style.right = "25px";

voltar.style.bottom = "110px";

voltar.style.width = "55px";

voltar.style.height = "55px";

voltar.style.display = "flex";

voltar.style.alignItems = "center";

voltar.style.justifyContent = "center";

voltar.style.background = "#ffb400";

voltar.style.color = "#000";

voltar.style.fontSize = "28px";

voltar.style.fontWeight = "bold";

voltar.style.borderRadius = "50%";

voltar.style.cursor = "pointer";

voltar.style.zIndex = "999";

voltar.style.opacity = "0";

voltar.style.transition = ".3s";

document.body.appendChild(voltar);

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

voltar.style.opacity = "1";

} else {

voltar.style.opacity = "0";

}

});

voltar.onclick = () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

};

