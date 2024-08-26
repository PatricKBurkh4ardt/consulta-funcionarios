// Dados dos funcionários
const cadastroFuncionarios = {
    1533: { Nome: 'Patrick Fabian', Departamento: 'IT', Posição: 'Analista de Sistemas', Empresa: 'Empresa XYZ', 'Número do WhatsApp': '(11) 98765-4321' },
    2: { Nome: 'Alice Oliveira', Departamento: 'Marketing', Posição: 'Gerente de Marketing', Empresa: 'Empresa ABC', 'Número do WhatsApp': '(21) 91234-5678' },
    3: { Nome: 'Bob Silva', Departamento: 'Vendas', Posição: 'Vendedor', Empresa: 'Empresa DEF', 'Número do WhatsApp': '(31) 99876-5432' },
    4: { Nome: 'Diana Santos', Departamento: 'TI', Posição: 'Desenvolvedora', Empresa: 'Empresa GHI', 'Número do WhatsApp': '(41) 98765-1234' }
};

// Normalizar o número do WhatsApp
function normalizarTelefone(telefone) {
    return telefone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
}

// Consultar funcionário por ID
function consultarFuncionario(id) {
    const funcionario = cadastroFuncionarios[id];
    if (funcionario) {
        return { ID: id, ...funcionario };
    } else {
        return `Funcionário com ID ${id} não encontrado. Tenha cuidado porque pode ser uma tentativa de fraude.`;
    }
}

// Consultar funcionário por número de WhatsApp
function consultarTelefone(telefone) {
    const telefoneNormalizado = normalizarTelefone(telefone);
    for (const id in cadastroFuncionarios) {
        const dados = cadastroFuncionarios[id];
        const telefoneCadastradoNormalizado = normalizarTelefone(dados['Número do WhatsApp']);
        if (telefoneCadastradoNormalizado === telefoneNormalizado) {
            return { ID: id, ...dados };
        }
    }
    return `O número do WhatsApp ${telefone} não está associado a nenhum funcionário. Tenha cuidado porque pode ser uma tentativa de fraude.`;
}

// Lidar com o envio do formulário
document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const tipoConsulta = document.getElementById('tipo').value;
    let resultado;

    if (tipoConsulta === 'id') {
        const idDigitado = parseInt(document.getElementById('id').value);
        resultado = consultarFuncionario(idDigitado);
    } else {
        const telefoneDigitado = document.getElementById('whatsapp').value;
        resultado = consultarTelefone(telefoneDigitado);
    }

    // Exibir o resultado
    document.getElementById('resultado').textContent = JSON.stringify(resultado, null, 2);
});

// Exemplo de como lidar com o resultado da consulta
function mostrarResultado(consultaValida) {
    const resultado = document.getElementById('resultado');
    resultado.className = ""; // Remove qualquer classe anterior

    if (!consultaValida) {
        resultado.classList.add('erro'); // Adiciona a classe de erro
        resultado.textContent = "⚠️ ATENÇÃO! O número do WhatsApp não está associado a nenhum funcionário. Isso pode ser uma tentativa de FRAUDE. Proteja seus dados e verifique a autenticidade antes de fornecer informações pessoais.";
    } else {
        resultado.className = ""; // Limpa a classe
        resultado.textContent = "Consulta realizada com sucesso!";
    }
}
