const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

    btnMostrarProjetos.addEventListener('click', () => {
        projetosInativos.forEach(
            projetoInativo => {
                projetoInativo.classList.add('ativo');
            }
        );

        btnMostrarProjetos.classList.add('remover');
    });