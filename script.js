
/* ========== CADASTRO (cadastro.html) ========== */
const formCadastro = document.getElementById('pao');

    if (pao) {
        pao.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const endereco = document.getElementById('end').value.trim();
            const cpf = document.getElementById('cpf').value.trim();
            const turno = document.getElementById('turno').value.trim();
            const cargo = document.getElementById('cargo').value.trim();
            const telefone = document.getElementById('tel').value.trim();

            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            const novoUsuario = { nome, email, endereco, cpf, turno, cargo, telefone };

            usuarios.push(novoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            alert('Cadastro realizado com sucesso!');
            window.location.href = 'inicio.html';

        });
    }


     // ====== CASOS DE TESTE (edite aqui se refizer algum teste) ======
        const casos = [
            {
                id: "CT-01", tipo: "Requisitos", nome: "Cadastro com sucesso",
                testado: "Envio do formulário completo e mensagem de sucesso",
                como: "Nome: Maria Silva; CPF: 12345678901; Telefone: 32999999999; E-mail: maria@gmail.com; Endereço: Rua A, 10; Turno: Manhã; Cargo: Caixa; clique em “Enviar informações”",
                esperado: "Salva o cadastro, exibe “Cadastro realizado com sucesso!” e abre a página inicio.html",
                obtido: "Alerta “Cadastro realizado com sucesso!” exibido, dados gravados no localStorage e redirecionamento para inicio.html",
                status: "PASSOU"
            },
            {
                id: "CT-02", tipo: "Bloqueio", nome: "Campo obrigatório vazio",
                testado: "Validação do campo obrigatório “Nome”",
                como: "Nome em branco; demais campos válidos; turno e cargo selecionados; clique em “Enviar informações”",
                esperado: "O sistema impede o envio e avisa que o campo é obrigatório",
                obtido: "Envio bloqueado; o navegador exibiu o balão “Preencha este campo” sobre o Nome (aviso padrão do navegador, não alerta vermelho)",
                status: "PASSOU"
            },
            {
                id: "CT-03", tipo: "Bloqueio", nome: "Formato de e-mail inválido",
                testado: "Validação do campo E-mail",
                como: "E-mail: joao.gmail.com (sem @); demais campos válidos; clique em “Enviar informações”",
                esperado: "O sistema impede o envio e avisa que o e-mail é inválido",
                obtido: "Envio bloqueado; o navegador exibiu o balão “Inclua um ‘@’ no endereço de e-mail”",
                status: "PASSOU"
            },
            {
                id: "CT-04", tipo: "Bloqueio", nome: "Seleção de múltiplos turnos",
                testado: "Seleção simultânea de dois turnos no campo Turno",
                como: "Selecionar “Manhã” e, em seguida, tentar marcar também “Tarde” (clicar e usar Ctrl+clique)",
                esperado: "O sistema não permite escolher dois turnos ao mesmo tempo",
                obtido: "Só uma opção fica marcada por vez; ao escolher “Tarde”, “Manhã” é desmarcada",
                status: "PASSOU"
            },
            {
                id: "CT-05", tipo: "Requisitos", nome: "Opções do campo Cargo",
                testado: "Quantidade de opções do select de Cargo",
                como: "Abrir a lista do campo Cargo e contar as opções",
                esperado: "A lista exibe pelo menos 4 cargos",
                obtido: "4 opções exibidas: Faxineiro, Caixa, Gerente e Repositor",
                status: "PASSOU"
            },
            {
                id: "CT-06", tipo: "Requisitos", nome: "Logo da empresa exibida",
                testado: "Presença do logo e do nome da empresa na tela de cadastro",
                como: "Abrir cadastro.html e observar o topo da página",
                esperado: "Logo e nome da empresa visíveis no cabeçalho",
                obtido: "Só aparece o texto “se junte a nos!”; não há logo nem nome da empresa na página",
                status: "FALHOU"
            },
            {
                id: "CT-07", tipo: "Requisitos", nome: "Botão “candidatar-se”",
                testado: "Navegação da página inicial para o cadastro",
                como: "Abrir index.html e clicar no botão “candidatar-se”",
                esperado: "O sistema abre a tela de cadastro (cadastro.html)",
                obtido: "A página cadastro.html foi aberta normalmente",
                status: "PASSOU"
            },
            {
                id: "CT-08", tipo: "Bloqueio", nome: "CPF com letras",
                testado: "Validação do campo CPF com caracteres não numéricos",
                como: "CPF: abc.def; demais campos válidos; tentar digitar as letras no campo",
                esperado: "O sistema não aceita letras no CPF",
                obtido: "O campo não permite digitar letras (aceita apenas números)",
                status: "PASSOU"
            },
            {
                id: "CT-09", tipo: "Bloqueio", nome: "CPF incompleto",
                testado: "Validação da quantidade de dígitos do CPF",
                como: "CPF: 123; demais campos válidos; clique em “Enviar informações”",
                esperado: "O sistema impede o envio e avisa que o CPF deve ter 11 dígitos",
                obtido: "O cadastro foi aceito, exibiu “Cadastro realizado com sucesso!” e abriu inicio.html",
                status: "FALHOU"
            },
            {
                id: "CT-10", tipo: "Bloqueio", nome: "CPF duplicado",
                testado: "Bloqueio de dois cadastros com o mesmo CPF",
                como: "Cadastrar CPF 12345678901 (CT-01) e cadastrar novamente outra pessoa com o mesmo CPF",
                esperado: "O sistema impede o segundo cadastro e avisa que o CPF já existe",
                obtido: "O segundo cadastro foi aceito e salvo; o localStorage ficou com dois registros com o mesmo CPF",
                status: "FALHOU"
            },
            {
                id: "CT-11", tipo: "Bloqueio", nome: "Telefone com dígitos demais",
                testado: "Limite de tamanho do campo Telefone",
                como: "Telefone: 3299999999999999 (16 dígitos); demais campos válidos; clique em “Enviar informações”",
                esperado: "O sistema impede o envio (máximo de 13 caracteres)",
                obtido: "O campo aceitou todos os dígitos (o maxlength não funciona em campo number) e o cadastro foi salvo",
                status: "FALHOU"
            }
        ];
