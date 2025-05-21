// Experiências
const experiencias = {
    voluntario: {
        titulo: "Trabalho voluntário - São João 2024",
        data: "jun - 2024",
        local: "Caçapava, SP",
        resumo: "Atuei voluntariamente na banca de bebidas da minha tia na Festa de São João em Caçapava, SP, auxiliando na organização e logística. Minha principal função foi retirar bebidas do freezer e repassá-las aos colegas que atendiam no caixa, garantindo um fluxo eficiente e ágil no atendimento ao público. Essa experiência me permitiu desenvolver habilidades de trabalho em equipe e aprender a lidar com demandas rápidas em um ambiente dinâmico"
    },
    projetoAPI: {
        titulo: "Projeto API - Metodologia Scrum",
        data: "mar - 2024",
        local: "São José dos Campos, SP",
        resumo: "Desenvolvimento de uma API utilizando metodologia Scrum, trabalhando em equipe para criar uma solução robusta e escalável. Participação ativa em reuniões diárias, planejamento de sprints e revisões de código. Implementação de boas práticas de desenvolvimento e documentação do projeto."
    }
};

// Função para alterar a experiência selecionada
function alterarExperiencia(tipo) {
    const titulo = document.getElementById("titulo-experiencia");
    const data = document.getElementById("data-experiencia");
    const local = document.querySelector(".local");
    const resumo = document.getElementById("resumo-experiencia");

    titulo.textContent = experiencias[tipo].titulo;
    data.textContent = experiencias[tipo].data;
    local.textContent = experiencias[tipo].local;
    resumo.textContent = experiencias[tipo].resumo;

    // Atualiza a seleção visual
    document.querySelectorAll('.experiencia-item').forEach(item => {
        item.classList.remove('selecionado');
    });
    document.querySelector(`.experiencia-item[onclick="alterarExperiencia('${tipo}')"]`).classList.add('selecionado');
}

// Inicialização dos eventos
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 