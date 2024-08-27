const funcionarios = [
    { id: '12345', nome: 'João Silva', cargo: 'Analista de Sistemas', setor: 'Tecnologia da Informação', empresa: 'Tech Solutions', telefone: '11987654321' },
    { id: '67890', nome: 'Maria Oliveira', cargo: 'Gerente de Marketing', setor: 'Marketing e Vendas', empresa: 'Agência Digital', telefone: '11987654322' },
    { id: '11122', nome: 'Pedro Santos', cargo: 'Contador', setor: 'Finanças', empresa: 'Contabilidade & Cia', telefone: '11987654323' },
    { id: '33344', nome: 'Ana Rodrigues', cargo: 'Assistente Administrativa', setor: 'Administração', empresa: 'Indústria Alimentícia', telefone: '11987654324' },
    { id: '55566', nome: 'Carlos Ferreira', cargo: 'Engenheiro Civil', setor: 'Engenharia', empresa: 'Construtora', telefone: '11987654325' }
];

const safeLinks = ["https://www.itau.com.br", "https://www.santander.com.br"]; // Adicione aqui os links seguros

function consultarFuncionario() {
    const consultaPor = document.getElementById('consultaPor').value;
    const consultaInput = document.getElementById('consultaInput').value;
    const resultadoDiv = document.getElementById('resultadoConsulta');

    let funcionarioEncontrado = null;

    if (consultaPor === 'id') {
        funcionarioEncontrado = funcionarios.find(f => f.id === consultaInput);
    } else if (consultaPor === 'telefone') {
        funcionarioEncontrado = funcionarios.find(f => f.telefone === consultaInput);
    }

    if (funcionarioEncontrado) {
        resultadoDiv.innerHTML = `
            <p>Nome: ${funcionarioEncontrado.nome}</p>
            <p>Cargo: ${funcionarioEncontrado.cargo}</p>
            <p>Setor: ${funcionarioEncontrado.setor}</p>
            <p>Empresa: ${funcionarioEncontrado.empresa}</p>
        `;
    } else {
        resultadoDiv.innerHTML = "<p>Funcionário não encontrado.</p>";
    }
}

function verificarLink() {
    const linkInput = document.getElementById('linkInput').value;
    const resultadoVerificacaoDiv = document.getElementById('resultadoVerificacao');

    if (safeLinks.includes(linkInput)) {
        resultadoVerificacaoDiv.innerHTML = `<p>O link é seguro: ${linkInput}</p>`;
    } else {
        resultadoVerificacaoDiv.innerHTML = `<p>Cuidado! O link pode ser malicioso: ${linkInput}</p>`;
    }
}

