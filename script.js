document.addEventListener("DOMContentLoaded", () => {
    // Animación de entrada de productos
    document.querySelectorAll(".producto").forEach((prod, index) => {
        setTimeout(() => {
            prod.style.opacity = 1;
            prod.style.transform = "translateY(0)";
        }, 200 * index);
    });

    // Mensaje de agradecimiento + Toast al hacer clic en Comprar
    const botones = document.querySelectorAll(".comprar-btn");
    const agradecimiento = document.querySelector(".agradecimiento");

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            showToast("¡Gracias por tu compra! ✅");
            agradecimiento.style.display = "block";
        });
    });

    // Crear Toast flotante con clase CSS
    const toast = document.createElement("div");
    toast.classList.add("toast");
    document.body.appendChild(toast);

    function showToast(msg) {
        toast.textContent = msg;
        toast.style.display = "block";
        setTimeout(() => {
            toast.style.display = "none";
        }, 3000);
    }

    // Botón de modo oscuro con clase
    const darkButton = document.createElement("button");
    darkButton.textContent = "🌙 Modo Oscuro";
    darkButton.id = "modo-oscuro-btn";
    document.body.appendChild(darkButton);

    darkButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.querySelectorAll(".producto, header, footer").forEach(el => {
            el.classList.toggle("dark-mode");
        });
    });
});
