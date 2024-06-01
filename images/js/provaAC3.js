const questions = [
    {
        question: "O protocolo IP (IPv4) utiliza endereços com 32 bits (ou 4 bytes) e é representado por quatro grupos de números decimais separados por ponto, onde cada número desses pode assumir um valor de:",
        answers: {
            a: "1 a 100",
            b: "1 a 32",
            c: "0 a 525",
            d: "0 a 255"
        },
        correct: ["d"],
        explanation: "Cada octeto de um endereço IPv4 pode assumir valores de 0 a 255."
    },
    {
        question: "Qual afirmação descreve corretamente a função do IETF e do IESG?",
        answers: {
            a: "O IETF supervisiona as atividades dos grupos de trabalho do IESG.",
            b: "O IETF é um grupo remunerado que resolve problemas da Internet, enquanto o IESG numera e organiza sequencialmente todos os RFCs.",
            c: "O IETF e o IESG são responsáveis pela comercialização de endereços IP e pela monetização dos protocolos de Internet.",
            d: "O IETF, sob supervisão do IESG, redige e implementa novos protocolos de Internet, trabalhando com grupos de membros voluntários especializados em questões técnicas.",
            e: "O IETF é responsável por gerenciar a distribuição de endereços IP, enquanto o IESG atua como um órgão de supervisão."
        },
        correct: ["d"],
        explanation: "O IETF, sob supervisão do IESG, redige e implementa novos protocolos de Internet, trabalhando com grupos de membros voluntários especializados em questões técnicas."
    },
    {
        question: "Cada sub-rede deve residir inteiramente dentro de uma zona de disponibilidade e não pode abranger zonas. Ao iniciar recursos da AWS em zonas de disponibilidade separadas, é possível proteger suas aplicações contra a falha de uma única zona de disponibilidade:",
        answers: {
            a: "Verdadeiro",
            b: "Falso"
        },
        correct: ["a"],
        explanation: "Ao distribuir recursos em zonas de disponibilidade diferentes, é possível proteger as aplicações contra falhas de uma única zona de disponibilidade."
    },
    {
        question: "Máscaras de sub-rede com comprimento variável (VLSM) foram projetadas como uma medida para se evitar o desperdício da faixa de endereçamento IP. Com o VLSM, é possível repetir o processo de sub-divisão múltiplas vezes, permitindo assim a criação de sub-redes de tamanhos diversos, normalmente projetadas de acordo com o número de hosts necessários em cada uma dessas sub-redes. Considerando que a faixa de endereçamento disponível é a 204.14.5.0/24, o único conjunto de sub-redes que comporta os pré-requisitos das redes descritas anteriormente é:",
        answers: {
            a: "RedeA: 204.14.5.0/28, RedeB: 204.14.5.16/27, RedeC: 204.14.5.48/30, RedeD: 204.14.5.52/29, RedeE: 204.14.5.60/27",
            b: "RedeA: 204.14.5.0/28, RedeB: 204.14.5.16/27, RedeC: 204.14.5.48/30, RedeD: 204.14.5.52/28, RedeE: 204.14.5.68/27",
            c: "RedeA: 204.14.5.64/28, RedeB: 204.14.5.0/27, RedeC: 204.14.5.96/30, RedeD: 204.14.5.80/28, RedeE: 204.14.5.32/27",
            d: "RedeA: 204.14.5.80/28, RedeB: 204.14.5.32/27, RedeC: 204.14.5.92/30, RedeD: 204.14.5.64/29, RedeE: 204.14.5.0/27"
        },
        correct: ["d"],
        explanation: "As sub-redes fornecidas na opção d atendem aos requisitos de número de hosts e se encaixam na faixa de endereçamento disponível."
    },
    {
        question: "Qual serviço de rede da AWS permite que uma empresa crie uma rede virtual na AWS?",
        answers: {
            a: "Amazon Route 53",
            b: "Amazon Virtual Private Cloud (Amazon VPC)",
            c: "AWS Direct Connect",
            d: "AWS Config"
        },
        correct: ["b"],
        explanation: "O Amazon VPC permite que uma empresa crie uma rede virtual na AWS."
    },
    {
        question: "Dado o desenho de arquitetura de uso de VPC. Podemos afirmar que:",
        answers: {
            a: "Apenas a afirmativa III é verdadeira",
            b: "Todas as afirmativas estão erradas",
            c: "As alternativas II, III e IV estão corretas",
            d: "Apenas as afirmativas I e IV estão corretas",
            e: "Apenas a alternativa II está correta"
        },
        correct: ["a"],
        explanation: "A única afirmativa correta é que o internet gateway permite o tráfego de saída e entrada da internet para a VPC."
    },
    {
        question: "Considerando a rede 200.134.80.160/27, assinale a alternativa correta:",
        answers: {
            a: "O endereço 200.134.80.191 é válido para host",
            b: "O endereço de broadcast desta rede é 200.134.80.255",
            c: "A máscara de sub-rede é 255.255.224.0",
            d: "Esta sub-rede comporta até 126 endereços de hosts válidos",
            e: "O endereço 200.134.80.176 pertence a essa rede"
        },
        correct: ["e"],
        explanation: "O endereço 200.134.80.176 pertence à rede 200.134.80.160/27."
    },
    {
        question: "Para cada descrição a seguir, associe-a ao componente básico de rede correspondente:",
        answers: {
            a: "ISP Local/Regional (Internet Service Provider)",
            b: "POP – (Point of Presence)",
            c: "Servidores",
            d: "HTTP",
            e: "NOC (Network Operation Center)",
            f: "Usuário Local",
            g: "Formato da mensagem enviada",
            h: "Ações a serem tomadas",
            i: "Rede Corporativa"
        },
        correct: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
        explanation: "As descrições devem ser associadas aos componentes básicos de rede correspondentes."
    },
    {
        question: "Dentro do universo dos documentos conhecidos como RFCs (Request For Comments), é incorreto presumir que todos eles têm o propósito de descrever novos protocolos de rede. Existem RFCs cuja finalidade é reunir e divulgar compreensões e perspectivas que foram moldadas e aprimoradas pelo coletivo de profissionais e entusiastas que compõem a comunidade Internet:",
        answers: {
            a: "Verdadeiro",
            b: "Falso"
        },
        correct: ["a"],
        explanation: "Nem todos os RFCs têm o propósito de descrever novos protocolos de rede; alguns reúnem compreensões e perspectivas da comunidade."
    },
    {
        question: "A respeito do endereçamento IP e considerando a rede 192.168.1.0/28, assinale a alternativa correta:",
        answers: {
            a: "O endereço de broadcast desta rede é 192.168.255.255.",
            b: "Esta é uma rede classe A.",
            c: "O endereço 192.168.2.0 pertence a essa rede.",
            d: "Esta rede pode ser dividida em até 18 sub-redes.",
            e: "Nenhuma das alternativas",
            f: "A máscara de sub-rede pode ser representada igualmente como 255.255.255.248."
        },
        correct: ["f"],
        explanation: "A máscara de sub-rede para a rede 192.168.1.0/28 pode ser representada como 255.255.255.248."
    },
    {
        question: "Indique qual é a classe dos IPs listados a seguir:",
        answers: {
            a: "10.4.54.33",
            b: "192.168.1.4",
            c: "172.16.20.20",
            d: "192.168.2.0",
            e: "130.5.10.20",
            f: "10.3.128.20"
        },
        correct: ["a", "b", "c", "d", "e", "f"],
        explanation: "Indique a classe correta dos IPs listados."
    },
    {
        question: "Ao acessar os recursos de VPC na AWS podemos gerenciar:",
        answers: {
            a: "Tabela de Rotas",
            b: "Sub redes",
            c: "CloudFront",
            d: "ACL",
            e: "NAT Gateway",
            f: "Security Group",
            g: "Route 53",
            h: "Volumes EBS"
        },
        correct: ["a", "b", "d", "e", "f"],
        explanation: "Os recursos de VPC na AWS incluem a Tabela de Rotas, Sub redes, ACL, NAT Gateway e Security Group."
    },
    {
        question: "O tipo de sub-rede é determinado pela forma como você configura o roteamento para suas sub-redes. Por exemplo:",
        answers: {
            a: "A sub-rede tem uma rota direta para um gateway de internet. Os recursos em uma sub-rede pública podem acessar a Internet.",
            b: "A sub-rede não tem uma rota direta para um gateway da Internet. Os recursos em uma sub-rede privada exigem um dispositivo NAT para acessar a Internet.",
            c: "O tráfego da sub-rede é roteado através de um gateway virtual privado. A sub-rede deve ter uma rota para um gateway da Internet.",
            d: "A sub-rede não tem rotas para destinos fora de sua VPC. Os recursos nessa sub-rede só podem acessar ou ser acessados por outros recursos na mesma VPC."
        },
        correct: ["a", "b", "c", "d"],
        explanation: "As sub-redes públicas têm rota direta para um gateway de internet, sub-redes privadas exigem um dispositivo NAT, o tráfego das sub-redes VPN é roteado através de um gateway virtual privado, e sub-redes isoladas não têm rotas para fora da VPC."
    },
    {
        question: "Dadas as configurações de protocolos IP, podemos dizer que o modo de configuração que se associa a cada característica é:",
        answers: {
            a: "Dificuldade no gerenciamento",
            b: "Aplicável para servidores e/ou serviços com endereçamento permanente",
            c: "Facilita o gerenciamento",
            d: "Aplicável para grandes redes sem endereçamento permanente",
            e: "Ausência de Conflitos de IP na Rede",
            f: "Pode gerar conflitos de IP na Rede"
        },
        correct: ["a", "b", "c", "d", "e", "f"],
        explanation: "Os modos de configuração de IP são associados a diferentes características, como gerenciamento e conflitos de IP."
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
