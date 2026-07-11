// ===============================
// DG LOGÍSTICA REVERSA
// SCRIPT.JS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Loader
    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    });

    // Navbar
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.background = "#111";

            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(0,0,0,.45)";

            navbar.style.boxShadow = "none";

        }

    });

    // Contadores

    const numeros = document.querySelectorAll("[data-target]");

    const animarNumero = (el) => {

        const alvo = Number(el.dataset.target);

        let valor = 0;

        const incremento = alvo / 80;

        const timer = setInterval(() => {

            valor += incremento;

            if (valor >= alvo) {

                valor = alvo;

                clearInterval(timer);

            }

            el.textContent = Math.floor(valor);

        }, 20);

    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animarNumero(entry.target);

                observer.unobserve(entry.target);

            }

        });

    });

    numeros.forEach(el => observer.observe(el));

    // ===============================
    // CALCULADORA
    // ===============================

    const btn = document.getElementById("calcular");

    if(btn){

        btn.addEventListener("click",()=>{

            const investimento =
            Number(document.getElementById("investimento").value);

            if(!investimento){

                alert("Digite um valor.");

                return;

            }

            const categoria =
            document.getElementById("categoria").selectedIndex;

            let percentualMercado = 0;

            switch(categoria){

                case 0: // Smartphones

                    percentualMercado = 0.40;

                break;

                case 1: // Eletrônicos

                    percentualMercado = 0.40;

                break;

                case 2: // Ferramentas

                    percentualMercado = 0.40;

                break;

                case 3: // Linha branca

                    percentualMercado = 0.55;

                break;

                case 4: // Utilidades

                    percentualMercado = 0.45;

                break;

            }

            const valorMercado =
            investimento/percentualMercado;

            const economia =
            valorMercado-investimento;

            const roi =
            (economia/investimento)*100;

            document.getElementById("valorInvestimento").innerHTML =
            investimento.toLocaleString("pt-BR",{
                style:"currency",
                currency:"BRL"
            });

            document.getElementById("valorFaturamento").innerHTML =
            valorMercado.toLocaleString("pt-BR",{
                style:"currency",
                currency:"BRL"
            });

            document.getElementById("valorLucro").innerHTML =
            economia.toLocaleString("pt-BR",{
                style:"currency",
                currency:"BRL"
            });

            document.getElementById("valorROI").innerHTML =
            roi.toFixed(0)+"%";

            const categoriaNome =
            document.getElementById("categoria").options[categoria].text;

            const texto =
`Olá!

Fiz uma simulação no site.

Categoria: ${categoriaNome}

Investimento:
${investimento.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}

Valor de Mercado:
${valorMercado.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}

Economia:
${economia.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}

Gostaria de receber os lotes disponíveis.`;

            document.getElementById("btnWhatsapp").href =
            "https://wa.me/55SEUNUMERO?text="+encodeURIComponent(texto);

        });

    }

});