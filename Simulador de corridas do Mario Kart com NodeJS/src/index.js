const personagens = [
    { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, PONTOS: 0 },
    { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, PONTOS: 0 },
    { NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2, PONTOS: 0 },
    { NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3, PONTOS: 0 },
    { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
    { NOME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
];

// Funções do Jogo
// ---

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    const random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🏁 Rodada ${round}`);

        const block = await getRandomBlock();
        console.log(`Bloco sorteado: ${block}`);

        const diceResult1 = rollDice();
        const diceResult2 = rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;
        let winner = null;

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);

            if (totalTestSkill1 > totalTestSkill2) {
                winner = character1.NOME;
                character1.PONTOS++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                winner = character2.NOME;
                character2.PONTOS++;
            }
        } else if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "MANOBRABILIDADE", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "MANOBRABILIDADE", diceResult2, character2.MANOBRABILIDADE);

            if (totalTestSkill1 > totalTestSkill2) {
                winner = character1.NOME;
                character1.PONTOS++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                winner = character2.NOME;
                character2.PONTOS++;
            }
        } else if (block === "CONFRONTO") {
            const powerResult1 = diceResult1 + character1.PODER;
            const powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou ${character2.NOME}!🥊 `);

            await logRollResult(character1.NOME, "PODER", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "PODER", diceResult2, character2.PODER);

            if (powerResult1 > powerResult2) {
                console.log(`${character1.NOME} venceu o confronto e roubou 1 ponto de ${character2.NOME}`);
                if (character2.PONTOS > 0) {
                    character2.PONTOS--;
                }
                character1.PONTOS++;
            } else if (powerResult2 > powerResult1) {
                console.log(`${character2.NOME} venceu o confronto e roubou 1 ponto de ${character1.NOME}`);
                if (character1.PONTOS > 0) {
                    character1.PONTOS--;
                }
                character2.PONTOS++;
            } else {
                console.log("Confronto empatado! Ninguém perdeu pontos.");
            }
            winner = "Empate";
        }

        console.log("------------------");
        if (winner && winner !== "Empate") {
            console.log(`Vitória da rodada para: ${winner}`);
        } else if (winner === "Empate") {
            console.log("A rodada terminou em empate!");
        } else {
            console.log("A rodada terminou em empate!");
        }
        console.log(`Pontuação: ${character1.NOME}: ${character1.PONTOS} | ${character2.NOME}: ${character2.PONTOS}`);
    }

    // O vencedor final
    console.log("\n🏁 Corrida finalizada!");
    console.log(`Placar final: ${character1.NOME}: ${character1.PONTOS} | ${character2.NOME}: ${character2.PONTOS}`);

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`${character1.NOME} venceu a corrida! Parabéns! 🎉`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`${character2.NOME} venceu a corrida! Parabéns! 🎉`);
    } else {
        console.log("A corrida terminou em empate!");
    }
}

// Lógica de Seleção de Personagens
// ---

function selecionarPersonagemAleatorio(personagensDisponiveis) {
    if (personagensDisponiveis.length === 0) {
        throw new Error("Não há personagens disponíveis para seleção.");
    }
    
    const randomIndex = Math.floor(Math.random() * personagensDisponiveis.length);
    const personagemSelecionado = personagensDisponiveis[randomIndex];

    // Remove o personagem selecionado do array temporário para evitar repetição
    personagensDisponiveis.splice(randomIndex, 1);

    // Retorna uma CÓPIA do objeto para que os pontos não se acumulem em partidas futuras
    return { ...personagemSelecionado, PONTOS: 0 };
}

// Inicia o Jogo
// ---

(async function main() {
    console.log(`🏁🚩Bem-vindo ao Duelo de Corrida!🚩🏁`);
    
    // Cria uma cópia do array original de personagens para a seleção.
    const personagensDisponiveis = [...personagens];

    // Seleciona dois personagens aleatórios e únicos.
    const player1 = selecionarPersonagemAleatorio(personagensDisponiveis);
    const player2 = selecionarPersonagemAleatorio(personagensDisponiveis);
    
    console.log(`\nJogador 1 foi selecionado: ${player1.NOME}`);
    console.log(`Jogador 2 foi selecionado: ${player2.NOME}\n`);
    
    console.log(`Iniciando a partida entre ${player1.NOME} e ${player2.NOME}!\nBoa sorte!\n`);

    await playRaceEngine(player1, player2);
})();