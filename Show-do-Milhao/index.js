const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let perguntas = [
    {
        texto: 'Qual é a capital do Brasil?',
        alternativas: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
        resposta: 3,
    },
    {
        texto: 'Qual é o maior planeta do sistema solar?',
        alternativas: ['Terra', 'Vênus', 'Saturno', 'Júpiter'],
        resposta: 4,
    },
    {
        texto: 'Qual é a capital da França?',
        alternativas: ['Marselha', 'Lyon', 'Paris', 'Nice'],
        resposta: 3,
    },
    {
        texto: 'Qual é o nome do atual presidente dos Estados Unidos?',
        alternativas: ['Joe Biden', 'Kamala Harris', 'Donald Trump', 'Barack Obama'],
        resposta: 1,
    },
    {
        texto: 'Qual é o país atual campeão da copa do mundo?',
        alternativas: ['França', 'Argentina', 'Brasil', 'Bélgica'],
        resposta: 2,
    },
    {
        texto: 'Qual é o continente com maior número de países?',
        alternativas: ['África', 'Ásia', 'América do Norte', 'Europa'],
        resposta: 1,
    },
    {
        texto: 'Qual é o maior deserto do mundo?',
        alternativas: ['Kalahari', 'Gobi', 'Saara', 'Atacama'],
        resposta: 3,
    },
    {
        texto: 'Quem inventou a lâmpada?',
        alternativas: ['Graham Bell', 'Steve Jobs', 'Henry Ford', 'Thomas Edison'],
        resposta: 4,
    },
    {
        texto: 'Kryptonita é a fraqueza de qual super-herói?',
        alternativas: ['Hulk', 'Super-Homem', 'Batman', 'Flash'],
        resposta: 2,
    },
    {
        texto: 'Qual é o nome do maior país do mundo em área?',
        alternativas: ['China', 'Canadá', 'Rússia', 'Estados Unidos'],
        resposta: 3,
    },
    {
        texto: 'Qual é o maior osso do corpo humano?',
        alternativas: ['Fêmur', 'Tíbia', 'Úmero', 'Costela'],
        resposta: 1,
    },
    {
        texto: 'Qual é o animal mais rápido do mundo?',
        alternativas: ['Leopardo', 'Falcão-peregrino', 'Cheetah', 'Marlin-azul'],
        resposta: 2,
    },
    {
        texto: 'Quanto tempo durou o regime do apartheid na África do Sul?',
        alternativas: ['51 anos', '37 anos', '46 anos', '28 anos'],
        resposta: 3,
    },
    {
        texto: 'Qual é o nome da cidade mais populosa do mundo?',
        alternativas: ['Tóquio', 'Xangai', 'São Paulo', 'Mumbai'],
        resposta: 1,
    },
    {
        texto: 'Qual é o menor osso do corpo humano?',
        alternativas: ['Estribo', 'Martelo', 'Bigorna', 'Cóclea'],
        resposta: 1,
    },
    {
        texto: 'Qual destas substâncias faz parte da composição do vidro?',
        alternativas: ['Petróleo', 'Areia', 'Celulose', 'Fibra'],
        resposta: 2,
    },
    {
        texto: 'Qual é o nome do maior rio do mundo em extensão?',
        alternativas: ['Nilo', 'Amazonas', 'Yangtzé', 'Mississipi'],
        resposta: 2,
    },
    {
        texto: 'Qual é a cidade mais quente do mundo?',
        alternativas: ['Queensland', 'Al Aziziyah', 'Nova York', 'Kebilli'],
        resposta: 2,
    },
    {
        texto: 'Qual a nacionalidade do sociólogo e filósofo Durkheim?',
        alternativas: ['Francesa', 'Alemã', 'Inglesa', 'Norueguesa'],
        resposta: 1,
    },
    {
        texto: 'Qual é o nome da cidade mais fria do mundo?',
        alternativas: ['Norilsk', 'Verkhoyansk', 'Oymyakon', 'Yellowknife'],
        resposta: 3,
    },
    {
        texto: 'Qual é o nome da cidade mais nova do mundo?',
        alternativas: ['Naypyidaw', 'Astana', 'Brasília', 'Abuja'],
        resposta: 1,
    },
    {
        texto: 'Qual é o nome do país que é o único a ter uma bandeira com um dragão?',
        alternativas: ['Butão', 'China', 'País de Gales', 'Vietnã'],
        resposta: 3,
    },
    {
        texto: 'Qual é o nome da cidade mais antiga do mundo? ',
        alternativas: ['Jerusalém', 'Jericó', 'Atenas', 'Jacarta'],
        resposta: 2,
    },
    {
        texto: 'Qual é o nome do maior satélite natural do sistema solar?',
        alternativas: ['Lua', 'Calisto', 'Titã', 'Ganimedes'],
        resposta: 4,
    },
    {
        texto: 'Em que ano nasceu Barack Obama?',
        alternativas: ['1955', '1983', '1971', '1961'],
        resposta: 4,
    },
    {
        texto: 'Qual é o nome do maior crustáceo do mundo?',
        alternativas: ['Caranguejo-gigante-japonês', 'Lagosta-americana', 'Camarão-tigre-gigante', 'Caranguejo-real'],
        resposta: 1,
    },
    {
        texto: 'Qual é o nome do maior diamante do mundo?',
        alternativas: ['Estrela da África', 'Koh-i-Noor', 'Hope', 'Cullinan'],
        resposta: 4,
    },
    {
        texto: 'Quem foi a única pessoa na história a receber o Prêmio Nobel em áreas científicas diferentes?',
        alternativas: ['Marie Curie', 'Mahatma Gandhi', 'Albert Einstein', 'Stephen Hawking'],
        resposta: 1,
    }
];

const premios = [500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 200000, 300000, 400000, 500000, 1000000];
let perguntasOriginais = [...perguntas];
let nomeJogador = '';
let rodadaAtual = 0;
let perguntaAtual = 0;
let premioAtual = 0;
let pulos = 3;
let condicaototal = 0;
let condicaouniversitario = 0;
let condicaoplacas = 0;
let condicaocartas = 0;
let ranking = [];

// Função para iniciar o jogo
function iniciarJogo() {
    perguntas = [...perguntasOriginais];
    rl.question('Qual é o seu nome? ', (nome) => {
        nomeJogador = nome;
        console.log('Olá ' + nomeJogador + ', seja bem-vindo(a) ao Show do Milhão!');
        gerenciarJogo();
    });
}

// Função para responder as perguntas do jogo
function responderPergunta(pergunta) {
    rl.question('Escolha uma resposta: ', (resposta) => {
        let respostaNum = Number(resposta);
        if (!Number.isInteger(respostaNum) || respostaNum < 1 || respostaNum > 4) {
            console.log('\n**** Opção inválida. Tente novamente. ****');
            gerenciarJogo();
        } else if (parseInt(resposta) === pergunta.resposta) {
            console.log('\n**** Você acertou! ****');
            console.log(`\nA resposta correta da pergunta era: ${pergunta.alternativas[pergunta.resposta - 1]}`);
            premioAtual = premios[perguntaAtual];
            perguntaAtual++;
            if (perguntaAtual % 5 === 0) {
                rodadaAtual++;
                if (rodadaAtual === 5) {
                    console.log('\n**** Parabéns, você venceu o jogo! ****');
                    encerrarJogo();
                } else {
                    gerenciarJogo();
                }
            } else {
                gerenciarJogo();
            }
        } else {
            console.log('\n**** Você errou! ****');
            console.log(`\nA resposta correta da pergunta era: ${pergunta.alternativas[pergunta.resposta - 1]}`);
            // Verifica se o jogador errou a última pergunta do jogo e zera o valor do prêmio
            if (perguntaAtual == 24 && [25, 26, 27, 28].includes(perguntas.length)) {
                premioAtual = 0; 
            } else {
                premioAtual = premioAtual / 2;
            }
            encerrarJogo();
        }
    });
}

// Função para pular as perguntas do jogo
function pularPergunta() {
    // Verifica se o jogador está na última pergunta do jogo e não permite pular a pergunta
    if (perguntaAtual == 24 && [25, 26, 27, 28].includes(perguntas.length)) {
        console.log('\nVocê não pode pular a pergunta de 1 milhão de reais!');
        gerenciarJogo();
    } else {
        // Verifica se o jogador ainda tem pulos disponíveis
        if (pulos > 0) {
            pulos--;
            console.log(`\n**** Você pulou a pergunta. Você ainda tem ${pulos} pulo(s) restante(s). ****`);
            perguntas = [...perguntas.slice(0, perguntaAtual), ...perguntas.slice(perguntaAtual + 1)];
            gerenciarJogo();
        } else {
            console.log('\nVocê não tem mais pulos restantes.');
            gerenciarJogo();
        }
    }
}

// Função para a ajuda dos Universitários
function universitarios(pergunta) {
    console.log('\n**** Ajuda dos Universitários ****');
    console.log('Três estudantes de diversas faculdades dão suas respostas à pergunta e cabe ao participante confiar ou não.\n');

    const estudante1 = Math.floor(Math.random() * pergunta.alternativas.length);
    const estudante2 = Math.floor(Math.random() * pergunta.alternativas.length);
    const estudante3 = Math.floor(Math.random() * pergunta.alternativas.length);

    console.log(`Estudante 1: ${pergunta.alternativas[estudante1]}`);
    console.log(`Estudante 2: ${pergunta.alternativas[estudante2]}`);
    console.log(`Estudante 3: ${pergunta.alternativas[estudante3]}`);
}

// Função para a ajuda das Placas
function placas(pergunta) {
    console.log('\n**** Ajuda das Placas ****');
    console.log('Uma pequena plateia de 10 pessoas levanta placas numeradas, referentes à alternativa correta.\n');

    let totalPessoas = 10;
    let pessoasPorAlternativa = [];
    for (let i = 0; i < pergunta.alternativas.length; i++) {
        if (i === pergunta.alternativas.length - 1) {
            pessoasPorAlternativa[i] = totalPessoas;
        } else {
            pessoasPorAlternativa[i] = Math.floor(Math.random() * (totalPessoas + 1));
            totalPessoas -= pessoasPorAlternativa[i];
        }
        console.log(`Placa ${i + 1}: ${pessoasPorAlternativa[i]} pessoas levantaram`);
    }
}

// Função para a ajuda das Cartas
function cartas(pergunta) {
    console.log('\n**** Ajuda das Cartas ****');
    console.log('Uma carta de baralho é virada e algumas alternativas incorretas são eliminadas.\n');

    const alternativasIncorretas = pergunta.alternativas.filter((_, index) => index !== pergunta.resposta - 1);

    const cartaEscolhida = Math.floor(Math.random() * 4) + 1;

    let cartasEliminadas = 0;
    if (cartaEscolhida === 1) {
        console.log('Você tirou Rei, nenhuma alternativa errada é eliminada.');
    } else if (cartaEscolhida === 2) {
        cartasEliminadas = 1;
        console.log('Você tirou Ás, uma alternativa errada é eliminada.');
    } else if (cartaEscolhida === 3) {
        cartasEliminadas = 2;
        console.log('Você tirou 2, duas alternativas erradas são eliminadas.');
    } else if (cartaEscolhida === 4) {
        cartasEliminadas = 3;
        console.log('Você tirou 3, três alternativas erradas são eliminadas.');
    }

    for (let i = 0; i < cartasEliminadas; i++) {
        if (alternativasIncorretas.length > 0) {
            const alternativaEliminadaIndex = Math.floor(Math.random() * alternativasIncorretas.length);
            console.log(`Alternativa eliminada: ${alternativasIncorretas[alternativaEliminadaIndex]}`);
            alternativasIncorretas.splice(alternativaEliminadaIndex, 1);
        }
    }
}

// Função para pedir ajudas
function pedirAjuda(pergunta) {
    // Verifica se o jogador está na última pergunta do jogo e não permite pedir ajudas na pergunta
    if (perguntaAtual == 24 && [25, 26, 27, 28].includes(perguntas.length)) {
        console.log('\nVocê não pode pedir ajuda na pergunta de 1 milhão de reais!');
        gerenciarJogo();
    } else {
        if (condicaototal < 3) {
            console.log('**** Escolha uma opção de ajuda, ' + nomeJogador + ' ****');
            console.log('(1) Universitários');
            console.log('(2) Placas');
            console.log('(3) Cartas');
            rl.question('Digite o número da sua escolha: ', (resposta) => {
                // Verifica se o jogador ainda tem ajudas disponíveis
                if (resposta === '1' && condicaouniversitario === 0) {
                    universitarios(pergunta);
                    condicaouniversitario = 1;
                    condicaototal++;
                } else if (resposta === '2' && condicaoplacas === 0) {
                    placas(pergunta);
                    condicaoplacas = 1;
                    condicaototal++;
                } else if (resposta === '3' && condicaocartas === 0) {
                    cartas(pergunta);
                    condicaocartas = 1;
                    condicaototal++;
                } else {
                    console.log('\n**** Opção inválida ou ajuda já utilizada. Tente novamente. ****');
                }
                gerenciarJogo();
            });
        } else {
            console.log('\n**** Você já usou todas as suas ajudas! ****');
            gerenciarJogo();
        }
    }
}

// Função para parar o jogo
function pararJogo() {
    console.log('\n**** Você parou! ****');
    encerrarJogo();
}

// Função para controlar as perguntas e rodadas do jogo
function gerenciarJogo() {
    if (perguntaAtual < perguntas.length) {
        const pergunta = perguntas[perguntaAtual];
        console.log(`\n**** Rodada ${rodadaAtual + 1}, Pergunta ${perguntaAtual % 5 + 1} ****`);
        console.log(pergunta.texto);
        pergunta.alternativas.forEach((resposta, index) => {
            console.log(`${index + 1}. ${resposta}`);
        });
        console.log(`Se você acertar, ganhará R$ ${premios[perguntaAtual]} reais.`);
        console.log(`Se você parar agora, levará R$ ${premioAtual} reais.`);
        // Verifica se o jogador está na última pergunta do jogo e imprime uma mensagem
        if (perguntaAtual == 24 && [25, 26, 27, 28].includes(perguntas.length)) {
            console.log(`Se você errar, perderá todo o prêmio!`);
        } else {
            console.log(`Se você errar, sairá com R$ ${premioAtual / 2} reais.`);
        }
        console.log('**** Escolha uma opção, ' + nomeJogador + ' ****');
        console.log('(1) Responder');
        console.log('(2) Pular a pergunta');
        console.log('(3) Pedir ajuda');
        console.log('(4) Parar');
        rl.question('Digite o número da sua escolha: ', (escolha) => {
            switch (escolha) {
                case '1':
                    responderPergunta(pergunta);
                    break;
                case '2':
                    pularPergunta();
                    break;
                case '3':
                    pedirAjuda(pergunta);
                    break;
                case '4':
                    pararJogo();
                    break;
                default:
                    console.log('\n**** Opção inválida. Tente novamente. ****');
                    gerenciarJogo();
            }
        });
    } else {
        encerrarJogo();
    }
}

// Função para jogar novamente
function jogarNovamente() {
    rl.question('\nVocê gostaria de jogar novamente? (1) Sim / (2) Não: ', (resposta) => {
        if (resposta == '1') {
            rodadaAtual = 0;
            perguntaAtual = 0;
            premioAtual = 0;
            pulos = 3;
            condicaototal = 0;
            condicaouniversitario = 0;
            condicaoplacas = 0;
            condicaocartas = 0;
            iniciarJogo();
        } else if (resposta === '2') {
            rl.close();
        } else {
            console.log('\n**** Opção inválida. Tente novamente. ****');
            jogarNovamente();
        }
    });
}

// Função para encerrar o jogo
function encerrarJogo() {
    console.log('\n**** Fim do jogo, ' + nomeJogador + '! ****\n');
    // Verifica se o jogador está na última pergunta do jogo e imprime uma mensagem
    if (perguntaAtual == 24 || perguntaAtual == 25 && [25, 26, 27, 28].includes(perguntas.length)) {
        console.log(`Você parou na rodada final e faltava responder a pergunta final do jogo`);
    } else {
        console.log(`Você parou na rodada ${rodadaAtual + 1} e faltavam ${5 - rodadaAtual - 1} rodadas.`);
    }

    console.log(`\nVocê ganhou R$ ${premioAtual}!`);

    ranking.push({
        nome: nomeJogador,
        premio: premioAtual
    });

    ranking.sort((a, b) => b.premio - a.premio);

    console.log('\n**** Ranking dos melhores jogadores ****');
    ranking.forEach((jogador, index) => {
        console.log(`${index + 1}. ${jogador.nome} - R$ ${jogador.premio}`);
    });
    jogarNovamente();
}

iniciarJogo();