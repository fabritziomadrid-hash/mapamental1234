// ==========================================================================
// 1. Função para Mostrar/Esconder os Detalhes dos Cartões (Otimizada)
// ==========================================================================
function toggleDetails(id) {
    const element = document.getElementById(id);
    
    // O "if (element)" garante que o código só roda se o elemento realmente existir
    if (element) {
        // O .toggle() substitui todo o seu if/else: se tiver 'active' ele tira, se não tiver ele põe
        element.classList.toggle('active');
    }
}

// ==========================================================================
// 2. Lógica para Alternar entre Modo Claro (Azul Bebê) e Modo Escuro (Preto)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-dark");

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            // Altera o texto do botão para guiar o usuário
            if (document.body.classList.contains("dark-mode")) {
                toggleButton.textContent = "Modo Claro";
            } else {
                toggleButton.textContent = "Modo Escuro";
            }
        });
    }
});
