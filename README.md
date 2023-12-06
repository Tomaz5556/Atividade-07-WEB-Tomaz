# Show do Milhão

### Sumário

1. [Descrição](#descricao)
2. [Regras do Jogo](#regras)
3. [Como jogar](#jogar)
4. [Como executar](#executar)
5. [Autor](#autor)
6. [Créditos](#creditos)
7. [Licença](#licenca)

<div id='descricao'/> 

### 1. Descrição

O projeto é baseado no famoso game show brasileiro que testa o conhecimento dos participantes. O objetivo do jogo é responder corretamente a uma sequência de perguntas, cada uma com quatro alternativas. O jogo tem várias rodadas, e em cada uma delas, as perguntas ficam mais difíceis e o valor do prêmio aumenta. O jogador pode ganhar até um milhão de reais se acertar todas as perguntas. No final de cada jogo, é mostrado o ranking dos jogadores que mais pontuaram.

<div id='regras'/> 

### 2. Regras do Jogo

  1. O jogo tem 5 rodadas, cada uma com 5 perguntas.
  2. O jogo avança para a próxima rodada após o jogador responder corretamente a 5 perguntas.
  3. Cada pergunta tem 4 alternativas, e apenas uma é a correta.
  4. Se o jogador acertar a pergunta, ele avança para a próxima pergunta e o prêmio acumulado aumenta.
  5. Se o jogador errar a pergunta, o jogo termina e o prêmio acumulado é reduzido pela metade.
  6. O jogador tem a opção de parar o jogo a qualquer momento e levar o prêmio acumulado.
  7. O jogador conta com vários tipos de ajuda:

     - **Universitários**: Três estudantes de diversas faculdades dão suas respostas à pergunta e cabe ao jogador confiar ou não. Pode ser usada uma vez.
     - **Placas**: Uma pequena plateia levanta placas numeradas, referentes à alternativa correta. Por exemplo, para a terceira alternativa, levantam a placa de número 3. Cabe ao jogador decidir se concorda com a maioria das alternativas ou não. Pode ser usada uma vez.
     - **Cartas**: Quatro cartas de baralho são viradas e o jogador escolhe uma. Se tirar o Rei, nenhuma alternativa errada é eliminada. Ás elimina uma alternativa, 2 elimina duas alternativas e 3 elimina todas as três alternativas erradas, restando apenas a correta. Pode ser usada uma vez.
     - **Pulos**: O jogador pode `pular` a pergunta caso não saiba a resposta. Pode ser utilizado até 3 vezes.
  
  8. Na pergunta final, que vale o prêmio máximo, nenhuma das ajudas pode ser usada. O jogador tem a opção de responder à pergunta ou parar o jogo e sair com R$ 500 mil. Se o jogador errar a pergunta perderá todo o prêmio acumulado.

<div id='jogar'/> 

### 3. Como jogar

  1. No início do jogo, o jogador deve digitar o seu nome.
  2. Uma pergunta é apresentada com 4 alternativas.
  3. O jogador deve escolher uma das seguintes opções:

     - Responder a pergunta.
     - Pular a pergunta (se ainda tiver pulos disponíveis).
     - Pedir ajuda (se ainda tiver ajudas disponíveis).
     - Parar o jogo e levar o prêmio acumulado.
  
  5. Se o jogador escolher responder a pergunta, ele deve digitar o número da alternativa que acredita ser a correta.
  6. Se o jogador escolher pular uma pergunta, a pergunta atual é descartada e uma nova pergunta é apresentada.
  7. Se o jogador escolher pedir ajuda, ele deve escolher entre as ajudas disponíveis:
     
     - Universitários
     - Placas
     - Cartas
    
  9. Se o jogador escolher parar o jogo, o jogo termina e o prêmio acumulado é concedido ao jogador.
  10. O jogo continua até que o jogador erre uma pergunta, decida parar, ou responda todas as perguntas corretamente. 
  11. No final do jogo, o jogador pode optar por jogar novamente ou encerrar o jogo.

<div id='executar'/> 

### 4. Como executar

- Tenha instalado o Node.js
- Clone o repositório `git clone https://github.com/Tomaz5556/Atividade-07-WEB-Tomaz.git`
- Execute o comando para ir até o diretório do projeto `cd Show-do-Milhao` 
- Depois execute o comando `npm start`

<div id='autor'/> 

### 5. Autor

**Tomaz Martins Batista**

<div id='creditos'/> 

### 6. Créditos

- [Show do Milhão](https://pt.wikipedia.org/wiki/Show_do_Milh%C3%A3o)
- [Node.js](https://nodejs.org/en/)

<div id='licenca'/> 

### 7. Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
