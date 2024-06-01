const questions = [
    {
        question: "Na Arquitetura TCP/IP que é o modelo utilizado atualmente por todos os sistemas de comunicação de dados, está dividido em Camadas que são:",
        answers: {
            a: "Física; Enlace; Redes; Transporte; Sessão; Apresentação e Aplicação",
            b: "Física; Enlace; Redes; Transporte e Aplicação",
            c: "Nenhuma das Alternativas",
            d: "Física; Virtual; Redes; Transporte e Sessão"
        },
        correct: ["b"],
        explanation: "A Arquitetura TCP/IP é dividida nas camadas: Física, Enlace, Redes, Transporte e Aplicação."
    },
    {
        question: "O NGINX é um famoso software de servidor web de código aberto. Em sua versão inicial, estava direcionado a montagem de servidores WEB (HTTP) de alta performance. Porem, o NGINX atualmente pode ser utilizado também para implementar várias outras soluções como por exemplo:",
        answers: {
            a: "Nenhuma das Alternativas",
            b: "Balanceamento de Carga e Proxy Reverso",
            c: "Virtualização e Balanceamento de Carga",
            d: "Containers e Firewall",
            e: "Balanceamento de Carga e Firewall"
        },
        correct: ["b"],
        explanation: "O NGINX pode ser utilizado para Balanceamento de Carga e Proxy Reverso."
    },
    {
        question: "Qual o objetivo de um Smoke Test com relação aos Testes de Funcionalidade de uma Aplicação?",
        answers: {
            a: "Nenhuma das Alternativas",
            b: "É um tipo de teste de software que geralmente é executado nas versões iniciais de um software para garantir que possa haver integração entre o Android e um dispositivo Apple",
            c: "É um aplicativo para detecção de fumaça",
            d: "É um tipo de testes de incêndio realizado no ambiente de TI",
            e: "É um tipo de teste de software que geralmente é executado nas versões iniciais de um software para garantir que as funcionalidades críticas do programa estejam funcionando perfeitamente"
        },
        correct: ["e"],
        explanation: "O Smoke Test é um tipo de teste de software que garante que as funcionalidades críticas do programa estejam funcionando nas versões iniciais."
    },
    {
        question: "Considerando as respostas a seguir, qual a diferença entre Máquina Virtual (Virtual Machine) e Container?",
        answers: {
            a: "Máquinas Virtuais executam aplicações dentro de um Sistema Operacional convidado (guest) e Container executam aplicações diretamente num Sistema Operacional host (pai)",
            b: "Máquinas Virtuais são mais caras e Container são mais baratos",
            c: "Máquina Virtual é executada somente em Linux e um Container pode ser executado em plataformas Windows e/ou Linux",
            d: "Nenhuma das Alternativas",
            e: "Máquinas Virtuais executam aplicações dentro de um Sistema Operacional convidado (guest) e Container executam aplicações Somente na AWS, Azzure ou Google Cloud"
        },
        correct: ["a"],
        explanation: "Máquinas Virtuais executam aplicações dentro de um Sistema Operacional convidado (guest) e Container executam aplicações diretamente num Sistema Operacional host (pai)."
    },
    {
        question: "Dos vários benefícios de configurar uma solução de balanceamento de carga numa solução, podemos dizer que:",
        answers: {
            a: "Nenhuma das Alternativas",
            b: "Aumentar a resiliência e alta-disponibilidade da solução",
            c: "Permitir a transferência de arquivos de forma mais rápida e segura",
            d: "Aumentar a segurança de um ambiente e impedir invasões",
            e: "Substituir o serviço de resolução de nomes (DNS) por um mais efetivo"
        },
        correct: ["b"],
        explanation: "O balanceamento de carga aumenta a resiliência e alta-disponibilidade da solução."
    },
    {
        question: "É a tecnologia computacional, formada pelo trio PORTA/IP/PROCESSO que permite criar uma conexão virtual entre uma porta de um processo de aplicação e o protocolo de transporte fim-a-fim (UCP ou TCP) para uma outra porta/processo. Criado e gerenciado pela pilha TCP/IP de um Sistema Operacional. Neste caso, estamos falando de:",
        answers: {
            a: "Nenhuma das Alternativas",
            b: "Socket",
            c: "Comutação de Pacotes",
            d: "Roteamento",
            e: "Sistema Operacional"
        },
        correct: ["b"],
        explanation: "Estamos falando de Sockets, que criam uma conexão virtual entre processos de aplicação e protocolos de transporte."
    },
    {
        question: "A Rede Mundial de Computadores, conhecida por InterNET, é formada por milhares de pontos de conexão que foram uma malha de roteamento e direcionamento de todo o tráfego de dados em nível mundial. Com relação ao conjunto de protocolos de Transporte e Roteamento, a InterNET utiliza:",
        answers: {
            a: "TCP/UDP",
            b: "Nenhuma das Alternativas",
            c: "IP/UDP",
            d: "UDP/TCP",
            e: "TCP/IP",
            f: "TCP/ICMP"
        },
        correct: ["e"],
        explanation: "A Internet utiliza o conjunto de protocolos TCP/IP."
    },
    {
        question: "As estratégias de Continuous Integration; Continuous Deployment e Continuous Delivery possuem um mesmo objetivo que podemos definir por:",
        answers: {
            a: "Tornar o processo de desenvolvimento de um software (aplicação) e seus processos de versionamento (releases) rápidos e muito mais robustos e eficazes",
            b: "Tornar o processo de desenvolvimento de um software (aplicação) e seus processos de versionamento (releases) lentos e muito mais frágeis e ineficazes",
            c: "Tornar o processo de fabricação de um hardware rápido e muito mais robusto e eficaz",
            d: "Nenhuma das alternativas"
        },
        correct: ["a"],
        explanation: "As estratégias de Continuous Integration, Continuous Deployment e Continuous Delivery visam tornar o processo de desenvolvimento e versionamento de software rápidos, robustos e eficazes."
    },
    {
        question: "O Protocolo da camada de Transporte, UDP, é um protocolo não orientado a conexão e muito utilizado em aplicações como: Streaming de Mídia; Videoconferência; DNS; Telefonia IP; Jogos, etc. Verdadeiro ou Falso?",
        answers: {
            a: "Verdadeiro",
            b: "Falso"
        },
        correct: ["a"],
        explanation: "O UDP é um protocolo não orientado a conexão, utilizado em aplicações como Streaming de Mídia, Videoconferência, DNS, Telefonia IP, e Jogos."
    },
    {
        question: "Em se tratando dos principais benefícios trazidos pela Virtualização Computacional, podemos citar:",
        answers: {
            a: "Consolidação de Servidores; Compartilhamento; Encapsulamento; Hardware Independente e Custo Reduzido",
            b: "Nenhuma das Alternativas",
            c: "Custo Reduzido; Hardware Dependente; Encapsulamento; Isolamento e Consolidação de Servidores",
            d: "Consolidação de Servidores; Isolamento; Encapsulamento; Hardware Independente e Custo Reduzido"
        },
        correct: ["d"],
        explanation: "Os principais benefícios da Virtualização Computacional incluem Consolidação de Servidores, Isolamento, Encapsulamento, Hardware Independente e Custo Reduzido."
    },
    {
        question: "Com relação a como os componentes são distribuídos numa Arquitetura, podemos citar 3 abordagens:",
        answers: {
            a: "Arquiteturas Cliente; Arquiteturas Híbridas e Arquiteturas Descentralizadas",
            b: "Nenhuma das Alternativas",
            c: "Arquiteturas Únicas; Arquiteturas Coletivas e Arquiteturas Mistas",
            d: "Arquiteturas Centralizadas; Arquiteturas Híbridas e Arquiteturas Descentralizadas ou Distribuídas"
        },
        correct: ["d"],
        explanation: "As abordagens de distribuição de componentes em uma Arquitetura são: Arquiteturas Centralizadas, Arquiteturas Híbridas e Arquiteturas Descentralizadas ou Distribuídas."
    },
    {
        question: "Sobre a definição de Protocolo, podemos dizer que: Protocolos DEFINEM OS FORMATOS, A ORDEM DAS MENSAGENS ENVIADAS E RECEBIDAS PELAS ENTIDADES DE REDE E AS AÇÕES A SEREM TOMADAS NA TRANSMISSÃO E RECEPÇÃO DE MENSAGENS. Verdadeiro ou Falso?",
        answers: {
            a: "Verdadeiro",
            b: "Falso"
        },
        correct: ["a"],
        explanation: "Protocolos definem os formatos, a ordem das mensagens enviadas e recebidas, e as ações a serem tomadas na transmissão e recepção de mensagens."
    },
    {
        question: "Qual o nome do processo que o protocolo TCP, da Camada de Transporte, sempre executa a cada nova conexão e antes de ocorrer a transmissão de dados?",
        answers: {
            a: "Nenhuma das Alternativas",
            b: "3-Way Milk Shake",
            c: "2-Way Hand Shake",
            d: "3-Way Hand Shake"
        },
        correct: ["d"],
        explanation: "O processo que o protocolo TCP executa a cada nova conexão antes da transmissão de dados é chamado de 3-Way Hand Shake."
    },
    {
        question: "Com relação ao conceito de WEB Service, podemos afirmar que: 'Um WEB Service é qualquer parte do software disponibilizado via Internet e que usa um formato padronizado (XML ou JSON por exemplo) para a solicitação e resposta de uma interação de API'. Verdadeiro ou Falso?",
        answers: {
            a: "Verdadeiro",
            b: "Falso"
        },
        correct: ["a"],
        explanation: "Um WEB Service é qualquer parte do software disponibilizado via Internet que usa um formato padronizado (XML ou JSON) para solicitação e resposta de uma interação de API."
    },
    {
        question: "De forma resumida, como podemos definir o conceito de Container?",
        answers: {
            a: "Os containers proporcionam uma maneira padrão de empacotar uma máquina virtual num único objeto. Eles compartilham um sistema operacional instalado no servidor e são executados como processos isolados de recursos. Isso permite fazer implantações rápidas, confiáveis e consistentes, independentemente do ambiente",
            b: "Os containers proporcionam uma maneira padrão de empacotar código, configurações e dependências de seu aplicativo em várias máquinas virtuais. Eles compartilham um sistema operacional instalado no servidor e são executados como processos isolados de recursos. Isso permite fazer implantações rápidas, confiáveis e consistentes, independentemente do ambiente",
            c: "Nenhuma das alternativas",
            d: "Os containers proporcionam uma maneira padrão de empacotar código, configurações e dependências de seu aplicativo em um único objeto (imagem). Eles compartilham um sistema operacional instalado no servidor e são executados como processos isolados de recursos. Isso permite fazer implantações rápidas, confiáveis e consistentes, independentemente do ambiente"
        },
        correct: ["d"],
        explanation: "Os containers proporcionam uma maneira padrão de empacotar código, configurações e dependências de seu aplicativo em um único objeto (imagem). Eles compartilham um sistema operacional instalado no servidor e são executados como processos isolados de recursos, permitindo implantações rápidas, confiáveis e consistentes, independentemente do ambiente."
    },
    {
        question: "Com relação ao conceito de Continuous Delivery e Deployment, podemos afirmar que: trata-se de uma estratégia para, de forma regular e periódica, realizar o deploy dos artefatos que passaram pela fase de CI com nível de sucesso capaz de garantir a confiabilidade e estabilidade do Código que será promovido à produção. Verdadeiro ou Falso?",
        answers: {
            a: "Verdadeiro",
            b: "Falso"
        },
        correct: ["a"],
        explanation: "Continuous Delivery e Deployment são estratégias para realizar o deploy dos artefatos que passaram pela fase de CI, garantindo confiabilidade e estabilidade do código promovido à produção."
    },
    {
        question: "Dos tipos de alguns dos testes de performance que podemos realizar numa arquitetura, quais os mais utilizados para detectar gargalos e problemas relacionados a latência e performance de aplicações?",
        answers: {
            a: "Endurance Testing",
            b: "Capacity Testing",
            c: "Load Testing",
            d: "Stress Testing",
            e: "Volume Testing",
            f: "Spike ou Burst Testing"
        },
        correct: ["b", "c", "d", "f"],
        explanation: "Os testes de performance mais utilizados para detectar gargalos e problemas relacionados a latência e performance de aplicações são Capacity Testing, Load Testing, Stress Testing, e Spike ou Burst Testing."
    },
    {
        question: "Um colaborador de DevOps foi consultado para implementar uma solução de segurança e criptografia na camada de FRONTEND de um serviço WEB sendo disponibilizado pelo NGINX. Qual seria sua recomendação para realizar essa implementação?",
        answers: {
            a: "Implementar o protocolo HTTPS com Certificado Digital válido e confiável",
            b: "Nenhuma das Alternativas",
            c: "Implementar o protocolo HTTPS sem Certificado Digital",
            d: "Trocar o protocolo HTTP pelo protocolo SSH",
            e: "Trocar a porta padrão do FRONT END WEB - NGINX pela 8080 ao invés da 80"
        },
        correct: ["a"],
        explanation: "A recomendação para implementar uma solução de segurança e criptografia na camada de FRONTEND de um serviço WEB é implementar o protocolo HTTPS com Certificado Digital válido e confiável."
    },
    {
        question: "Com relação ao modelo de Computação em Nuvem, é uma forma de distribuição e comercialização de software 'já pronto'. Neste modelo, o fornecedor do software se responsabiliza por toda a estrutura necessária à disponibilização do sistema (servidores, conectividade, cuidados com segurança da informação), e o cliente utiliza o software via internet, pagando um valor pelo serviço. Essa definição refere-se a:",
        answers: {
            a: "Linux as a Service",
            b: "Everything as a Service",
            c: "LAMP as a Service",
            d: "Software as a Service",
            e: "Windows as a Service"
        },
        correct: ["d"],
        explanation: "Essa definição refere-se a Software as a Service."
    },
    {
        question: "Os protocolos HTTP (Hyper Text Transfer Protocol) e HTTPS (Hyper Text Transfer Protocol Security), dentro da Arquitetura TCP/IP estão inseridos em qual camada lógica?",
        answers: {
            a: "Transporte",
            b: "Aplicação",
            c: "Rede",
            d: "Apresentação",
            e: "Nenhuma das Alternativas",
            f: "Sessão"
        },
        correct: ["b"],
        explanation: "Os protocolos HTTP e HTTPS estão inseridos na camada de Aplicação da Arquitetura TCP/IP."
    },
    {
        question: "Em relação a proteção de conexões fim-a-fim, tanto em IPv4 como em IPv6, podemos utilizar técnicas que garantem criptografia ativa entre estruturas de pilha TCP denominadas de endpoints nas camadas de Aplicação e Transporte. Nesse caso estamos falando do uso dos protocolos:",
        answers: {
            a: "HTTP; TCP; SSL",
            b: "Nenhuma das Alternativas",
            c: "HTTPS; TLS; SSL",
            d: "HTTP; UDP; SSL",
            e: "HTTPS; TCP; SSL"
        },
        correct: ["c"],
        explanation: "Estamos falando do uso dos protocolos HTTPS, TLS e SSL para garantir criptografia ativa entre endpoints nas camadas de Aplicação e Transporte."
    },
    {
        question: "O termo Kubernetes se refere a:",
        answers: {
            a: "Um orquestrador de containers",
            b: "Um conjunto de Máquinas Virtuais",
            c: "Um painel de gerenciamento de Cloud Computing",
            d: "Um conjunto de Containers",
            e: "Um sistema operacional"
        },
        correct: ["a"],
        explanation: "Kubernetes se refere a um orquestrador de containers."
    },
    {
        question: "Em se tratando de segurança em comunicações WEB qual é o protocolo de camada de Aplicação que podemos implementar para garantir a confidencialidade e integridade das informações?",
        answers: {
            a: "HTTP",
            b: "FTP",
            c: "HTTP com Firewall",
            d: "HTTPS",
            e: "Nenhuma das Alternativas"
        },
        correct: ["d"],
        explanation: "Para garantir a confidencialidade e integridade das informações em comunicações WEB, implementamos o protocolo HTTPS."
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
