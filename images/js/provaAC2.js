const questions = [
    {
        question: "Sobre a inicialização de uma nova tela (Activity), é verdade afirmar que (marque quantas achar corretas):",
        answers: {
            a: "É opcional o uso de um 'context' na criação de uma Intent",
            b: "É possível enviar dados para a nova Activity os argumentos de seu construtor",
            c: "É possível enviar dados para a nova Activity somente pelo compartilhando de atributos de alguma object do projeto",
            d: "Precisamos, necessariamente, usar a classe Intent",
            e: "É possível enviar dados para a nova Activity usando 'extras'"
        },
        correct: ["d", "e"],
        explanation: "Para inicializar uma nova tela (Activity) em Android, é necessário usar a classe Intent e é possível enviar dados para a nova Activity usando 'extras'."
    },
    {
        question: "Sobre a separação entre 'código' e 'conteúdo' em um projeto Android, é verdade afirmar que (marque quantas achar corretas):",
        answers: {
            a: "Podem haver vários arquivos i18n.xml, um para cada idioma",
            b: "Os pares 'chave x valor' devem estar no(s) arquivo(s) strings.xml",
            c: "Podem haver vários arquivos strings.xml, um para cada idioma",
            d: "Os pares 'chave x valor' devem estar no(s) arquivo(s) i18n.xml",
            e: "Não existe uma forma padrão de se fazer isso com Android. O desenvolvedor deve implementar sua própria solução i18n ou usar alguma biblioteca"
        },
        correct: ["b", "c"],
        explanation: "Os pares 'chave x valor' devem estar no(s) arquivo(s) strings.xml e podem haver vários arquivos strings.xml, um para cada idioma."
    },
    {
        question: "Qual código contém um conteúdo apropriado para um arquivo de 'chave x valor' num projeto Android?",
        answers: {
            a: `<resources><string key="app_name">App Cores</string><string key="txt_cor_sim">Colorido</string><string key="txt_cor_nao">Monocromático</string></resources>`,
            b: `<resources><string name="app_name">App Cores</string><string name="txt_cor_sim">Colorido</string><string name="txt_cor_nao">Monocromático</string></resources>`,
            c: `<i18n><string name="app_name">App Cores</string><string name="txt_cor_sim">Colorido</string><string name="txt_cor_nao">Monocromático</string></i18n>`,
            d: `<i18n><string key="app_name">App Cores</string><string key="txt_cor_sim">Colorido</string><string key="txt_cor_nao">Monocromático</string></i18n>`
        },
        correct: ["b"],
        explanation: "O conteúdo apropriado para um arquivo de 'chave x valor' num projeto Android deve estar dentro de `<resources>` com o atributo `name`."
    },
    {
        question: "Para que um projeto Android consiga realizar chamadas para uma REST API é indispensável (marque quantas achar corretas):",
        answers: {
            a: "Codificar o acesso à internet, seja usando a biblioteca padrão ou seja com uso de bibliotecas de terceiros",
            b: "Incorporar a biblioteca Spring Boot no projeto",
            c: "Incorporar a biblioteca Retrofit no projeto",
            d: "Habilitar a permissão de acesso à internet no Android Manifest do projeto"
        },
        correct: ["d"],
        explanation: "Para realizar chamadas para uma REST API, é indispensável habilitar a permissão de acesso à internet no Android Manifest do projeto."
    },
    {
        question: "Sobre a Retrofit, é verdade afirmar que (marque quantas achar corretas):",
        answers: {
            a: "Faz parte da biblioteca padrão Android, não exigindo que se adicione nenhuma dependência para poder usá-la num projeto Android",
            b: "Exige que criemos uma ou mais interfaces com métodos que mapeiam os EndPoints que queremos invocar",
            c: "Suas chamadas podem ser síncronas ou assíncronas",
            d: "É uma biblioteca que abstrai a invocação de chamadas HTTP/REST",
            e: "Suas chamadas são sempre assíncronas"
        },
        correct: ["b", "c", "d"],
        explanation: "A Retrofit exige a criação de interfaces com métodos que mapeiam os EndPoints, suas chamadas podem ser síncronas ou assíncronas, e é uma biblioteca que abstrai a invocação de chamadas HTTP/REST."
    },
    {
        question: "Considere o código a seguir. Sobre ele, é verdade afirmar que (marque quantas achar corretas):",
        answers: {
            a: "A 'tela1' será a padrão porque é a primeira definida no bloco",
            b: "O código possui um erro",
            c: "Tela1(), Tela2() e Tela3() devem ser funções marcadas com @Composable",
            d: "Configura uma navegação que permite alterar 'parte' da tela",
            e: "O código está correto, considerando que existem Tela1(), Tela2() e Tela3() corretamente programadas"
        },
        correct: ["c", "d", "e"],
        explanation: "O código configura uma navegação que permite alterar 'parte' da tela, as funções Tela1(), Tela2() e Tela3() devem ser marcadas com @Composable, e o código está correto considerando que as funções existem e estão corretamente programadas."
    },
    {
        question: "Sobre Coroutines é verdade afirmar que (marque quantas achar corretas):",
        answers: {
            a: "Exemplos práticos e comuns de seu uso: invocação de chamadas à REST APIs e leitura/escrita de arquivos no dispositivo",
            b: "Seu uso torna o app mais performático",
            c: "Não faz parte da biblioteca padrão, sendo necessário adicionar dependência ao projeto para poder usar Coroutines",
            d: "Permite a execução de códigos que poderiam, potencialmente, congelar ou 'crashar' o app",
            e: "Sua adoção permite o uso de NavController",
            f: "Faz parte da biblioteca padrão, não sendo necessário adicionar dependência ao projeto para poder usar Coroutines"
        },
        correct: ["a", "c", "d"],
        explanation: "Coroutines são usadas para invocação de chamadas à REST APIs e leitura/escrita de arquivos, não fazem parte da biblioteca padrão, sendo necessário adicionar dependência, e permitem a execução de códigos que poderiam, potencialmente, congelar ou 'crashar' o app."
    },
    {
        question: "Qual é o propósito do ViewModel no padrão MVVM?",
        answers: {
            a: "Nenhuma das alternativas está correta",
            b: "Lidar com a navegação entre telas",
            c: "Desenhar a interface do usuário",
            d: "Gerenciar a lógica de negócios e os dados da aplicação",
            e: "Lidar com a representação dos dados na interface (UI)",
            f: "Fornecer uma representação visual dos dados"
        },
        correct: ["d"],
        explanation: "O ViewModel no padrão MVVM gerencia a lógica de negócios e os dados da aplicação."
    },
    {
        question: "No contexto do Retrofit2 para Android, qual é o objetivo principal de sua utilização?",
        answers: {
            a: "Realizar requisições SOAP para consumir APIs RESTful.",
            b: "Nenhuma das alternativas citadas",
            c: "Realizar requisições HTTP para consumir APIs RESTful.",
            d: "Realizar requisições HTTP para consumir APIs GraphQL.",
            e: "Realizar requisições HTTP para consumir APIs RESTful."
        },
        correct: ["e"],
        explanation: "O principal objetivo do Retrofit2 para Android é realizar requisições HTTP para consumir APIs RESTful."
    },
    {
        question: "Qual é a finalidade do NavHost no Jetpack Compose?",
        answers: {
            a: "O NavHost é usado para exibir uma única tela fixa em um aplicativo Compose.",
            b: "O NavHost é usado para manipular a entrada do usuário em telas de formulário.",
            c: "O NavHost é usado para criar animações complexas durante a transição entre telas.",
            d: "O NavHost é usado para gerenciar os recursos de compartilhamento de tela entre vários aplicativos.",
            e: "O NavHost é usado para implementar a lógica de navegação entre diferentes telas em um aplicativo."
        },
        correct: ["e"],
        explanation: "O NavHost é usado para implementar a lógica de navegação entre diferentes telas em um aplicativo."
    },
    {
        question: "Qual função é usada para navegar para uma nova tela usando o NavController no Jetpack Compose?",
        answers: {
            a: "navigate()",
            b: "navigation()",
            c: "nav()",
            d: "goTo()",
            e: "navigateFromTo()"
        },
        correct: ["a"],
        explanation: "A função usada para navegar para uma nova tela usando o NavController no Jetpack Compose é navigate()."
    },
    {
        question: "Considere que existe uma classe Aluno no projeto. Quando precisamos que um 'remember' lide com uma Lista (List), usamos um código como o da alternativa:",
        answers: {
            a: "val lista = remember { mutableStateList<Aluno>() }",
            b: "val lista = remember { mutableStateOf(mutableListOf<Aluno>()) }",
            c: "val lista = remember { mutableStateOf(listOf<Aluno>()) }",
            d: "val lista = remember { mutableStateListOf<Aluno>() }",
            e: "val lista = remember { mutableListOf<Aluno>() }"
        },
        correct: ["d"],
        explanation: "Para que um 'remember' lide com uma Lista (List), usamos o código: val lista = remember { mutableStateListOf<Aluno>() }."
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
