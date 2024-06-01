const questions = [
    {
        question: "Podemos utilizar com o nginx quais algoritmos de balanceamento de carga?",
        answers: {
            a: "ip-hash",
            b: "least-connected",
            c: "round-robin ponderado",
            d: "least-bandwidth",
            e: "least-response",
            f: "least-resource",
            g: "round-robin"
        },
        correct: ["a", "b", "c", "d", "g"],
        explanation: "Os algoritmos de balanceamento de carga suportados pelo nginx incluem ip-hash, least-connected, round-robin ponderado, least-bandwidth, e round-robin."
    },
    {
        question: "No processo de configuração da arquitetura mínima de rede do projeto foram necessários alguns serviços AWS, forneça os passos necessários para levantamento da infraestrutura:",
        answers: {
            a: "Criação de uma nova VPC",
            b: "São criadas sub-redes",
            c: "Associadas a essa VPC",
            d: "É designado então uma route-table",
            e: "Um internet gateway",
            f: "Um nat gateway",
            g: "Instâncias de capacidade elástica",
            h: "Na subnet",
            i: "EC2 instâncias",
            j: "ACL"
        },
        correct: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
        explanation: "Os passos incluem criação de uma nova VPC, sub-redes associadas à VPC, designação de route-table, internet gateway, nat gateway, instâncias de capacidade elástica na subnet, EC2 instâncias, e ACL."
    },
    {
        question: "Dentre as utilizações e vantagens de um proxy reverso qual que NÃO podemos citar:",
        answers: {
            a: "Eles podem compactar o conteúdo antes de entregá-lo aos clientes, reduzindo o uso de largura de banda e acelerando o tempo de carregamento da página para os usuários.",
            b: "Atua como uma barreira protetora entre a internet pública e os servidores internos.",
            c: "Os proxies reversos distribuem o tráfego de rede de entrada em vários servidores para garantir a utilização ideal de recursos.",
            d: "Os proxies reversos geralmente servem como gateways de API, gerenciando e protegendo a comunicação entre clientes e APIs de backend.",
            e: "Adiciona uma camada extra de segurança, inspecionando e filtrando o tráfego de entrada em busca de possíveis ameaças e vulnerabilidades."
        },
        correct: ["d"],
        explanation: "Os proxies reversos geralmente servem como gateways de API, gerenciando e protegendo a comunicação entre clientes e APIs de backend."
    },
    {
        question: "A configuração mais simples para balanceamento de carga com nginx pode ser semelhante a esta: No exemplo acima, existem 3 instâncias do mesmo aplicativo em execução na porta 3000 em máquinas de uma rede entre os ips 10.0.0.200-10.0.0.220. Quando o método de balanceamento de carga não é configurado especificamente, o padrão é least-connected. Todas as solicitações são enviadas por proxy para o grupo de servidores meu_backend e o nginx aplica balanceamento de carga HTTP para distribuir as solicitações.",
        answers: {
            a: "Verdadeiro",
            b: "Falso"
        },
        correct: ["b"],
        explanation: "O método de balanceamento de carga padrão do nginx é round-robin, não least-connected."
    },
    {
        question: "Em se tratando do conceito de aplicações distribuídas, qual o elemento que provê a comunicação lógica entre dois ou mais pontos (origem/destino) ou entre dois ou mais processos que estejam em máquinas separadas entre duas redes mas na mesma VPC?",
        answers: {
            a: "Servidor web",
            b: "Balanceador de carga",
            c: "Proxy reverso",
            d: "Proxy de encaminhamento",
            e: "Navegador web"
        },
        correct: ["c"],
        explanation: "O proxy reverso provê a comunicação lógica entre dois ou mais pontos ou processos em máquinas separadas entre duas redes mas na mesma VPC."
    },
    {
        question: "Relacione a descrição com o algoritmo de balanceamento de carga:",
        answers: {
            a: "Os balanceadores de carga distribuem o tráfego analisando a carga atual do servidor: Least-connected",
            b: "Além de seu nome DNS, cada servidor nesse algoritmo também recebe um “peso”: Round-robin ponderado",
            c: "Este algoritmo combina o menor método de conexão com o menor tempo médio de resposta do servidor: Least-response time",
            d: "Usa o DNS (Domain Name System) para atribuir sequencialmente solicitações a cada servidor em uma rotação contínua: Round-robin",
            e: "Esse algoritmo dá prioridade ao servidor com as menores conexões ativas quando uma nova solicitação de cliente é recebida: Least-connected",
            f: "Combina endereços de origem e de destino do tráfego de entrada e usa uma função matemática para convertê-lo e com base na sua conversão, a conexão é atribuída a um servidor específico: Ip-hash"
        },
        correct: ["a", "b", "c", "d", "e", "f"],
        explanation: "As descrições corretas dos algoritmos de balanceamento de carga são least-connected, round-robin ponderado, least-response time, round-robin, least-connected, e ip-hash."
    },
    {
        question: "Sobre as características diferentes entre Access Control List (ACL) e Security Group (SG) podemos classificar as frases como:",
        answers: {
            a: "Operamos no nível de sub-rede: ACL",
            b: "Operamos em nível de instância: SG",
            c: "É stateless, o tráfego de retorno deve ser permitido explicitamente: ACL",
            d: "Todas as regras são avaliadas antes de decidir permitir o tráfego: SG",
            e: "Não podemos bloquear endereços IP específicos: SG",
            f: "Suporta regras de permissão e regras de negação: ACL"
        },
        correct: ["a", "b", "c", "d", "e", "f"],
        explanation: "As características corretas entre ACL e SG são que ACL opera no nível de sub-rede, SG opera em nível de instância, ACL é stateless, SG avalia todas as regras antes de permitir o tráfego, SG não pode bloquear IPs específicos, e ACL suporta regras de permissão e negação."
    },
    {
        question: "Sobre os servidores proxy, analise as sentenças relacionadas às similaridades entre um proxy reverso e um proxy de encaminhamento:",
        answers: {
            a: "Ambos protegem os dispositivos conectados a uma rede privada contra ameaças da Internet e de outras redes externas",
            b: "Ambos podem limitar os tipos e tamanhos dos arquivos que passam por eles e impedir que usuários não autenticados enviem solicitações por meio deles",
            c: "Ambos podem realizar comutação de portas e protocolos, o que pode disfarçar ainda mais os padrões de acesso usados para acessar recursos ocultos por trás deles",
            d: "Ambos podem usar o mesmo software para serem configurados",
            e: "Ambos não requerem clientes pré-configurados sendo acessíveis publicamente"
        },
        correct: ["a", "b", "c", "d"],
        explanation: "As sentenças corretas são que ambos protegem dispositivos contra ameaças, podem limitar tipos e tamanhos de arquivos, podem realizar comutação de portas e protocolos, e podem usar o mesmo software para serem configurados."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function renderQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questionObj = questions[currentQuestionIndex];
    const questionEl = document.createElement('div');
    questionEl.classList.add('question');

    const questionText = document.createElement('p');
    questionText.textContent = questionObj.question;
    questionEl.appendChild(questionText);

    if (questionObj.answers.a === "Verdadeiro" || questionObj.answers.a === "Falso") {
        for (const [key, value] of Object.entries(questionObj.answers)) {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${currentQuestionIndex}`;
            input.value = key;
            label.appendChild(input);
            label.append(` ${value}`);
            questionEl.appendChild(label);
            questionEl.appendChild(document.createElement('br'));
        }
    } else {
        for (const [key, value] of Object.entries(questionObj.answers)) {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = `q${currentQuestionIndex}`;
            input.value = key;
            label.appendChild(input);
            label.append(` ${value}`);
            questionEl.appendChild(label);
            questionEl.appendChild(document.createElement('br'));
        }
    }

    quizContainer.appendChild(questionEl);
}

function nextQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const questionObj = questions[currentQuestionIndex];
    let selectedOptions;
    if (questionObj.answers.a === "Verdadeiro" || questionObj.answers.a === "Falso") {
        selectedOptions = quizContainer.querySelector('input[name="q' + currentQuestionIndex + '"]:checked');
        if (selectedOptions) {
            userAnswers[currentQuestionIndex] = [selectedOptions.value];
        }
    } else {
        selectedOptions = quizContainer.querySelectorAll('input[name="q' + currentQuestionIndex + '"]:checked');
        userAnswers[currentQuestionIndex] = Array.from(selectedOptions).map(option => option.value);
    }

    if (selectedOptions && selectedOptions.length !== 0) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            renderQuestion();
        } else {
            calculateScore();
            displayReview();
        }
    } else {
        alert('Por favor, selecione uma opção antes de continuar.');
    }
}

function calculateScore() {
    questions.forEach((question, index) => {
        const correctAnswers = question.correct;
        const userAnswer = userAnswers[index] || [];
        const weight = question.weight || 1;

        const correctCount = userAnswer.filter(answer => correctAnswers.includes(answer)).length;
        const incorrectCount = userAnswer.length - correctCount;

        if (incorrectCount === 0) {
            score += (correctCount / correctAnswers.length) * weight;
        }
    });

    const resultDiv = document.getElementById('result');
    const scorePercentage = (score / questions.length) * 100;
    resultDiv.textContent = `Você acertou ${score.toFixed(2)} de ${questions.length} perguntas. Nota: ${scorePercentage.toFixed(2)}%`;

    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'none';
}

function displayReview() {
    const reviewDiv = document.getElementById('review');
    reviewDiv.innerHTML = '<h2>Revisão</h2>';

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswers = question.correct;
        const explanation = question.explanation;
        const weight = question.weight || 1;

        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        const correctCount = userAnswer.filter(answer => correctAnswers.includes(answer)).length;
        const incorrectCount = userAnswer.length - correctCount;

        if (incorrectCount === 0) {
            reviewItem.classList.add('correct');
            reviewItem.innerHTML = `
                <p><strong>Questão ${index + 1}:</strong> ${question.question}</p>
                <p>Sua resposta: ${userAnswer.map(answer => question.answers[answer]).join(', ')}</p>
                <p>Resposta correta: ${correctAnswers.map(answer => question.answers[answer]).join(', ')}</p>
                <p class="explanation">Explicação: ${explanation}</p>
            `;
        } else {
            reviewItem.classList.add('incorrect');
            reviewItem.innerHTML = `
                <p><strong>Questão ${index + 1}:</strong> ${question.question}</p>
                <p>Sua resposta: ${userAnswer.map(answer => question.answers[answer] || 'Não respondida').join(', ')}</p>
                <p>Resposta correta: ${correctAnswers.map(answer => question.answers[answer]).join(', ')}</p>
                <p class="explanation">Explicação: ${explanation}</p>
            `;
        }

        reviewDiv.appendChild(reviewItem);
    });
}

document.addEventListener('DOMContentLoaded', renderQuestion);
