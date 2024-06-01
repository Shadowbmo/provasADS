const questions = [
    {
        question: "O que o LazyColumn/LazyRow faz para melhorar o desempenho em listas grandes?",
        answers: {
            a: "Utiliza uma abordagem síncrona para carregar os itens.",
            b: "Carrega apenas os itens visíveis na tela, otimizando o uso de recursos",
            c: "Recria todos os itens a cada rolagem",
            d: "Realiza o carregamento de todos os itens de uma vez"
        },
        correct: ["b"],
        explanation: "LazyColumn/LazyRow carrega apenas os itens visíveis na tela, otimizando o uso de recursos, o que melhora o desempenho em listas grandes."
    },
    {
        question: "Qual é a função do \"remember\" em Jetpack Compose?",
        answers: {
            a: "Registra eventos de teclado.",
            b: "Recorda a última ação do usuário.",
            c: "Mantém o estado entre recomposições.",
            d: "Lembra-se de configurações do dispositivo."
        },
        correct: ["c"],
        explanation: "A função 'remember' em Jetpack Compose mantém o estado entre recomposições, permitindo que o estado persista ao longo de múltiplas renderizações."
    },
    {
        question: "Qual destes composables a seguir é usado para exibir texto na interface de usuário do Android?",
        answers: {
            a: "Text",
            b: "TextField",
            c: "OutlinedText",
            d: "OutlinedTextField"
        },
        correct: ["a"],
        explanation: "O composable 'Text' é usado para exibir texto na interface de usuário do Android."
    },
    {
        question: "Qual unidade de medida é usada para dimensionar elementos de interface de usuário de forma independente de resolução?",
        answers: {
            a: "dpx",
            b: "pd",
            c: "dp",
            d: "px"
        },
        correct: ["c"],
        explanation: "A unidade de medida 'dp' (density-independent pixels) é usada para dimensionar elementos de interface de usuário de forma independente de resolução."
    },
    {
        question: "Como você implementaria a renderização condicional em Jetpack Compose?",
        answers: {
            a: "Usando apenas o operador ternário.",
            b: "Utilizando a estrutura if-else diretamente no código Compose.",
            c: "Dependendo apenas de animações para controlar a visibilidade.",
            d: "Ignorando completamente a renderização condicional."
        },
        correct: ["b"],
        explanation: "A renderização condicional em Jetpack Compose é implementada utilizando a estrutura if-else diretamente no código Compose."
    },
    {
        question: `Considere o seguinte código Kotlin:
        \n\ndata class Artista(\n val codigo: String,\n var nomeArtistico: String,\n var cache: Double,\n var aposentado: Boolean\n)`,
        answers: {
            a: "Nenhum atributo da classe podem ser alterado numa instância dela",
            b: "Não existe 'data class'. O correto é 'class data'.",
            c: "A classe possui 4 atributos",
            d: "A classe possui um construtor que tem 4 argumentos",
            e: "Todos os atributos da classe podem ser alterados numa instância dela"
        },
        correct: ["c", "d"],
        weight: 0.5,
        explanation: "A classe 'Artista' possui 4 atributos e um construtor que tem 4 argumentos."
    },
    {
        question: "Sobre funções cujo objetivo é renderizarem componentes na tela com Jetpack Compose, é verdade afirmar que:",
        answers: {
            a: "Deve estar anotada com @Composable",
            b: "Deve ter pelo menos um parâmetro do tipo Composable",
            c: "Deve ter um retorno do tipo Composable",
            d: "Por convenção seu nome deve seguir o padrão PascalCase",
            e: "Pode ou não conter parâmetros, conforme a necessidade"
        },
        correct: ["a", "e"],
        weight: 0.5,
        explanation: "Funções que renderizam componentes na tela com Jetpack Compose devem estar anotadas com @Composable e podem ou não conter parâmetros, conforme a necessidade."
    },
    {
        question: "Sobre funções na kotlin, é verdade afirmar que:",
        answers: {
            a: "Sua declaração começa com o termo function",
            b: "Não é necessário indicar o tipo dos parâmetros na declaração",
            c: "Quando não há retorno, simplesmente nenhum tipo é indicado na declaração da função",
            d: "Quando não há retorno, o tipo indicado na declaração da função é Void",
            e: "Sua declaração começa com o termo fun",
            f: "O tipo de seu retorno, quando há, é indicado após os parêntesis dos parâmetros"
        },
        correct: ["c", "f"],
        weight: 0.5,
        explanation: "Quando uma função em Kotlin não tem retorno, simplesmente nenhum tipo é indicado na declaração da função. O tipo de retorno, quando há, é indicado após os parêntesis dos parâmetros."
    },
    {
        question: "Sobre objetos criados com remember numa Activity Jetpack Compose, é verdade afirmar que:",
        answers: {
            a: "Só podem ser declarados com var, afinal sofrem constantes mudanças",
            b: "Seus valores podem ser compartilhados entre todos os componentes de uma tela",
            c: "Sempre que seu valor é alterado, todos os componentes que têm acesso a ele são, como que, 'notificados'",
            d: "Só são necessários para objetos 'simples'. Para coleções (como listas, por exemplo), não são necessários"
        },
        correct: ["b", "c"],
        weight: 0.5,
        explanation: "Objetos criados com 'remember' numa Activity Jetpack Compose podem ter seus valores compartilhados entre todos os componentes de uma tela e, sempre que seu valor é alterado, todos os componentes que têm acesso a ele são 'notificados'."
    },
    {
        question: "São componentes do Jetpack Compose:",
        answers: {
            a: "Label",
            b: "Button",
            c: "Column",
            d: "Line",
            e: "TextField",
            f: "Text"
        },
        correct: ["b", "c", "e", "f"],
        weight: 0.25,
        explanation: "Os componentes do Jetpack Compose incluem 'Button', 'Column', 'TextField' e 'Text'."
    },
    {
        question: "É possível criar toda uma mudança de aparência na tela com a interação entre os elementos sem adicionar nenhuma função, além da função de renderização de componentes?",
        answers: {
            a: "Verdadeiro",
            b: "Falso"
        },
        correct: ["a"],
        explanation: "É possível criar toda uma mudança de aparência na tela com a interação entre os elementos sem adicionar nenhuma função, além da função de renderização de componentes."
    },
    {
        question: "O nome de uma imagem, ao ser incorporada num projeto Android, deve seguir as seguintes regras: - Não pode começar com números - Não pode ter espaços em branco - Deve seguir o padrão kebab-case",
        answers: {
            a: "Verdadeiro",
            b: "Falso"
        },
        correct: ["b"],
        explanation: "O nome de uma imagem ao ser incorporada num projeto Android deve seguir as regras de não começar com números, não ter espaços em branco, e não necessariamente seguir o padrão kebab-case."
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
    resultDiv.textContent = `Você acertou ${score.toFixed(2)} de ${questions.length} perguntas.`;

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
