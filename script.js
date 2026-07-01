// ==========================================================================
// 1. Função para Mostrar/Esconder os Detalhes dos Cartões (Seu código original)
// ==========================================================================
function toggleDetails(id) {
    const detailElement = document.getElementById(id);
    
    if (detailElement) {
        // Liga/Desliga a classe 'active' que mostra o texto no CSS
        detailElement.classList.toggle('active');
    }
}

// ==========================================================================
// 2. Lógica para Alternar entre Modo Claro (Azul Bebê) e Modo Escuro (Preto)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o botão de alternar pelo ID
    const toggleButton = document.getElementById("toggle-dark");

    // Verifica se o botão realmente existe na página antes de adicionar o evento
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            // Adiciona ou remove a classe 'dark-mode' do <body>
            document.body.classList.toggle("dark-mode");
            
            // Opcional: Altera o texto do botão para o usuário saber o que vai acontecer
            if (document.body.classList.contains("dark-mode")) {
                toggleButton.textContent = "Modo Claro";
            } else {
                toggleButton.textContent = "Modo Escuro";
            }
        });
    }
});
