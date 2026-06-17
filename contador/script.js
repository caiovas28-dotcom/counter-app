let contador = localStorage.getItem("contador");

// inicia contador
if (contador === null) {
    contador = 0;
} else {
    contador = Number(contador);
}

// elementos
const valor = document.getElementById("valor");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");
const reset = document.getElementById("reset");
const themeBtn = document.getElementById("theme");

// mostra valor inicial
valor.textContent = contador;

// função central
function atualizarTela() {
    valor.textContent = contador;
    localStorage.setItem("contador", contador);

    // animação pop
    valor.classList.remove("pop");
    void valor.offsetWidth;
    valor.classList.add("pop");
}

// +1
mais.addEventListener("click", function () {
    contador++;
    atualizarTela();
});

// -1 (permite negativos)
menos.addEventListener("click", function () {
    contador--;
    atualizarTela();
});

// reset
reset.addEventListener("click", function () {
    contador = 0;
    atualizarTela();
});


// =====================
// TEMA DARK / LIGHT
// =====================

// carregar tema salvo
let tema = localStorage.getItem("tema");

if (tema === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "◑";
} else {
    themeBtn.textContent = "◐";
}

// alternar tema
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
        themeBtn.textContent = "◑";
    } else {
        localStorage.setItem("tema", "light");
        themeBtn.textContent = "◐";
    }
});